import React from 'react'
import './Balance.css'

const Balance = props => {
    const getPercentage = index => {
        return (
            props.format(((index / props.revenue) * 100).toFixed(0))
                .replace(',', '')
                .replace('00', '')
        )
    }
    console.log(props.format)
    return (
        <div className="balance">
            <div className="balance-title">
                <p className="text-simple">{props.title}</p>
                <hr />
            </div>
            <div className="balance-body">
                <div>
                    <p className="text-simple"><strong>Total Receita</strong></p>
                    <p className="text-simple">Custo de bens vendidos</p>
                    <p className="text-simple"><strong>Lucro Bruto</strong></p>
                    <p className="text-simple">Total Despesas Operacionais</p>
                    <p className="text-simple">Lucro Operacional</p>
                    <hr />
                    <p className="text-simple">Imposto</p>
                    <hr />
                    <p className="text-simple"><strong>Lucro Líquido</strong></p>
                </div>
                <div className="num-col">
                    <p className="text-simple"><strong>{props.format(props.revenue)}</strong></p>
                    <p className="text-simple">{props.format(props.soldGoodsCosts)}</p>
                    <hr />
                    <p className="text-simple"><strong>{props.format(props.grossProfit)}</strong></p>
                    <p className="text-simple">{props.format(props.operatingCosts)}</p>
                    <p className="text-simple">{props.format(props.operatingProfit)}</p>
                    <p className="text-simple">{props.format(props.taxes)}</p>
                    <p className="text-simple"><strong>{props.format(props.netProfit)}</strong></p>
                </div>
                <div className="num-col">
                    <p className="text-simple"><strong>100%</strong></p>
                    <p className="text-simple">{getPercentage(props.soldGoodsCosts)}%</p>
                    <hr />
                    <p className="text-simple"><strong>{getPercentage(props.grossProfit)}%</strong></p>
                    <p className="text-simple">{getPercentage(props.operatingCosts)}%</p>
                    <p className="text-simple">{getPercentage(props.operatingProfit)}%</p>
                    <p className="text-simple">{getPercentage(props.taxes)}%</p>
                    <p className="text-simple"><strong>{getPercentage(props.netProfit)}%</strong></p>
                </div>
            </div>
        </div>
    )
}

export default Balance