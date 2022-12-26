import React from 'react'
import './Balance.css'

const Balance = props => {
    return (
        <div className="balance">
            <div className="balance-title">
                <p className="text-simple">{props.title}</p>
                <hr />
            </div>
            <div className="balance-body">
                <div>
                    <p className="text-simple">Total Receita</p>
                    <p className="text-simple">Custo de bens vendidos</p>
                    <p className="text-simple"><strong>Lucro Bruto</strong></p>
                    <p className="text-simple">Total Despesas Operacionais</p>
                    <p className="text-simple">Lucro Operacional</p>
                    <hr />
                    <p className="text-simple">Imposto</p>
                    <hr />
                    <p className="text-simple">Lucro Líquido</p>
                </div>
                <div className="num-col">
                    <p className="text-simple">{props.revenue}</p>
                    <p className="text-simple">{props.soldGoodsCosts}</p>
                    <hr />
                    <p className="text-simple"><strong>{props.grossProfit}</strong></p>
                    <p className="text-simple">{props.operatingCosts}</p>
                    <p className="text-simple">{props.operatingProfit}</p>
                    <p className="text-simple">{props.taxes}</p>
                    <p className="text-simple">{props.netProfit}</p>
                </div>
                <div className="num-col">
                    <p className="text-simple">100%</p>
                    <p className="text-simple">34%</p>
                    <hr />
                    <p className="text-simple"><strong>66%</strong></p>
                    <p className="text-simple">47%</p>
                    <p className="text-simple">19%</p>
                    <p className="text-simple">12%</p>
                    <p className="text-simple">7%</p>
                </div>
            </div>
        </div>
    )
}

export default Balance