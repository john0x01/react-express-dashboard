import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './components/card/Card'
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
    


    // Obter saldo de cada mês
    const getBalance = (backendData) => {
        let balancesArray = []
        for(let i in backendData) {
            const monthBalance = {
                month: backendData[i].month,
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
        return balancesArray
    }


    // Calcular variáveis aqui
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
                balance: getBalance(backendData)[monthIndex].balance
            }
        } catch(e) {}
        
    }
    console.log(formatDecimals(-1.9))
    return (
        <React.Fragment>
            <div className="cards">
                <div className="cards-left">
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
                            (calculateVariables().netProfit / calculateVariables(undefined, backendData.length - 2).netProfit
                            - 1) * 100
                        ) : ''}
                    />
                    <Card 
                        title="Saldo no final do mês" 
                        body={formatDecimals(calculateVariables() ? calculateVariables().balance : '')}
                        percentage={calculateVariables() ? formatDecimals(
                            (calculateVariables().balance / calculateVariables(undefined, backendData.length -2).balance
                            - 1) * 100
                        ) : ''}
                    />
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default App