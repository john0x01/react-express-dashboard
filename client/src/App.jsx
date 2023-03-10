import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './components/card/Card'
import Chart from './components/chart/Chart'
import Balance from './components/balance/Balance'
import Indicator from './components/indicator/Indicator'
import './App.css'


import { baseApiUrl } from './global'

const App = () => {
    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        axios.get(baseApiUrl)
            .then(res => res.data)
            .then(data => setBackendData(data))
        
    }, []) 

    // Recebe um número como 3200 e retorna uma string como "R$3.200,00"
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    // Remove o "R$"
    const formatDecimals = (num, money=true) => {
        return formatter.format(num)
            .replace('R$', '')
    }
    


    // Obter variaveis de cada mês
    const getChartsArrays = (backendData) => {
        let balancesArray = []
        let revenuesArray = []
        let outgoingArray = []
        for(let i in backendData) {
            const monthRevenue = {
                revenue: backendData[i].revenue
            }
            revenuesArray.push(monthRevenue)
            const monthOutgoing = {
                outgoing: (backendData[i].soldGoodsCosts + backendData[i].operatingCosts) * (-1)
            }
            outgoingArray.push(monthOutgoing)
            const monthBalance = {
                balance: backendData[i].startingBalance ? 
                    // Se o mês tiver startingBalance (apenas Janeiro), será
                    // o saldo
                    backendData[i].startingBalance : ( 
                        balancesArray[i - 1] ? balancesArray[i - 1].balance +
                           // Se o saldo do mês anterior estiver setado, somar
                           // ele com o netProfit do mês atual 
                            backendData[i].revenue - 
                            backendData[i].soldGoodsCosts - 
                            backendData[i].operatingCosts -
                            (backendData[i].taxes * backendData[i].revenue) :
                                ''
    
                    )
                
            }
            balancesArray.push(monthBalance)
        }
        return {
            revenuesArray: revenuesArray,
            outgoingArray: outgoingArray,
            balancesArray: balancesArray
        }
    }


    // Calcular variáveis do mes atual
    const calculateVariables = (property, customIndex='lastMonth') => {
        const monthIndex = customIndex !== 'lastMonth' ? customIndex : backendData.length - 1
        try {
            return {
                percentage: (backendData[monthIndex][property] /
                    backendData[monthIndex - 1][property] - 1) * 100,
                outgoing: backendData[monthIndex].soldGoodsCosts +
                    backendData[monthIndex].operatingCosts,
                grossProfit: backendData[monthIndex].revenue -
                    backendData[monthIndex].soldGoodsCosts,
                operatingProfit: backendData[monthIndex].revenue -
                    backendData[monthIndex].soldGoodsCosts - 
                    backendData[monthIndex].operatingCosts,
                netProfit: backendData[monthIndex].revenue -
                    backendData[monthIndex].soldGoodsCosts - 
                    backendData[monthIndex].operatingCosts -
                    (backendData[monthIndex].taxes * backendData[monthIndex].revenue),
                balance: getChartsArrays(backendData).balancesArray[monthIndex].balance
            }
        } catch(e) {}
        
    }


    return (
        <React.Fragment>
            <div className="cards">
                <Card 
                    title="Total Receita" 
                    body={formatDecimals(backendData[backendData.length - 1].revenue)} 
                    percentage={formatDecimals(
                        calculateVariables('revenue') ? 
                            calculateVariables('revenue').percentage : '')}
                        />
                <Card 
                    title="Total Despesas" 
                    body={formatDecimals(calculateVariables() ? calculateVariables().outgoing : '')} 
                    percentage={calculateVariables() ? formatDecimals(
                        (calculateVariables().outgoing / calculateVariables(undefined, backendData.length - 2).outgoing
                        - 1) * 100
                    ) : ''}
                        />
                <Card 
                    title="Lucro Líquido" 
                    body={formatDecimals(calculateVariables() ? calculateVariables().netProfit : '')} 
                    percentage={calculateVariables() ? formatDecimals(
                        (Math.abs(calculateVariables().netProfit / calculateVariables(undefined, backendData.length - 2).netProfit)
                        - 1) * 100
                    ) : ''}
                />
                <Card 
                    title="Saldo no final do mês" 
                    body={formatDecimals(calculateVariables() ? calculateVariables().balance : '')}
                    percentage={calculateVariables() ? formatDecimals(
                        (Math.abs(calculateVariables().balance / calculateVariables(undefined, backendData.length -2).balance)
                        - 1) * 100
                    ) : ''}
                />
            </div>
            <div className="charts">
                <Chart 
                    title="Receitas e Despesas"
                    chart="bar"
                    revenue={getChartsArrays(backendData)['revenuesArray'] ? 
                        getChartsArrays(backendData)['revenuesArray'] : ''}
                    outgoing={getChartsArrays(backendData)['outgoingArray'] ? 
                        getChartsArrays(backendData)['outgoingArray'] : ''}
                />
                <Chart
                    title="Saldo no final do mês"
                    chart="line"
                    balance={getChartsArrays(backendData)['balancesArray'] ? 
                        getChartsArrays(backendData)['balancesArray'] : ''}
                />
            </div>
            <div className="bottom-cards">
                <Balance 
                    title="Demonstração de resultados"
                    format={formatDecimals}
                    revenue={backendData[backendData.length - 1].revenue}
                    soldGoodsCosts={backendData[backendData.length - 1].soldGoodsCosts}
                    outgoing={calculateVariables() ? calculateVariables().outgoing : ''}
                    grossProfit={calculateVariables() ? calculateVariables().grossProfit : ''}
                    operatingCosts={backendData[backendData.length - 1].operatingCosts}
                    operatingProfit={calculateVariables() ? calculateVariables().operatingProfit : ''}
                    taxes={backendData[backendData.length - 1].taxes * backendData[backendData.length - 1].revenue}
                    netProfit={calculateVariables() ? calculateVariables().netProfit : ''}
                />
                <div className="indicators">
                    <Indicator 
                        title="% Margem de Lucro Líquido"
                        data={[
                            { x: 1, y: calculateVariables() ? calculateVariables().netProfit : ''}, 
                            { x: 2, y: backendData[1] ? backendData[backendData.length - 1].revenue : ''}
                        ]}
                        text={calculateVariables() ? calculateVariables().netProfit / backendData[backendData.length - 1].revenue * 100 : ''}
                        chart="pie"
                    />
                    <Indicator 
                        title="Índice de Liquidez"
                        data={[
                            { x: 1, y: 5 - ((backendData[1] ? backendData[backendData.length - 1].currentAssets /
                            backendData[backendData.length - 1].currentLiabilities : '') < 5 ? (backendData[1] ? backendData[backendData.length - 1].currentAssets /
                            backendData[backendData.length - 1].currentLiabilities : '') : 5)}, 
                            { x: 2, y: backendData[1] ? backendData[backendData.length - 1].currentAssets /
                            backendData[backendData.length - 1].currentLiabilities : ''}
                        ]}
                        index={backendData[1] ? backendData[backendData.length - 1].currentAssets /
                            backendData[backendData.length - 1].currentLiabilities : ''}
                        
                    />
                </div>
            </div>

            
        </React.Fragment>
    )
}

export default App
