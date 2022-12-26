import React from 'react'
import './Chart.css'

import BarChart from './BarChart'
import LineChart from './LineChart'

const Chart = props => {
    return (
        <div className="chart">
            <div className="chart-title">
                <p className="text-simple">{props.title}</p>
            </div>
            <div className="chart-body">
                {props.chart === 'bar' ? 
            <BarChart revenue={props.revenue} outgoing={props.outgoing} /> : 
            <LineChart balance={props.balance} />}
            </div>
        </div>
    )
}

export default Chart