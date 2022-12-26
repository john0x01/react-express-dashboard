import React from 'react'
import './Chart.css'

import BarChart from './BarChart'

const Chart = props => {
    return (
        <div className="chart">
            <div className="chart-title">
                <p className="text-simple">{props.title}</p>
            </div>
            <div className="chart-body">
                {props.chart === 'bar' ? <BarChart revenue={props.revenue} outgoing={props.outgoing} /> : ''}
            </div>
            {props.footer ? 
                <div className="chart-footer">
                </div>
            : '' }
        </div>
    )
}

export default Chart