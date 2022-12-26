import React from 'react'
import './Chart.css'

const Chart = props => {
    return (
        <div className="chart">
            <div className="chart-title">
                <p className="text-simple">{props.title}</p>
            </div>
            <div className="chart-body">

            </div>
            {props.footer ? 
                <div className="chart-footer">
                </div>
            : '' }
        </div>
    )
}

export default Chart