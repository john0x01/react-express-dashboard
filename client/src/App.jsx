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

    // Rece um número como 3200 e retorna uma string como "R$3,200.00"
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'BRL'
    })

    // Remove o "R$" e troca vírgula e ponto
    const formatDecimals = (num, money=true) => {
        return formatter.format(num)
            .slice(2)
            .replace(',','.')
            .replace('.', ',')
    }
    
    // Calcular variáveis aqui
    const calculateVariables = (property, customIndex='lastMonth') => {
        const monthIndex = customIndex != 'lastMonth' ? customIndex : backendData.length - 1
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
                    (backendData[monthIndex].taxes * backendData[monthIndex].revenue)

            }
        } catch(e) {}
        
    }

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
                            (calculateVariables().outgoing / calculateVariables(backendData.length - 2).outgoing
                            - 1) * 100
                        ) : ''}
                            />
                    <Card 
                        title="Lucro Líquido" 
                        body={formatDecimals(calculateVariables() ? calculateVariables().netProfit : '')} 
                        percentage="-41,7"
                    />
                    <Card 
                        title="Saldo no final do mês" 
                        body="5.712,00" 
                        percentage="-4,8" 
                    />
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default App