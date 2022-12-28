import React from 'react'
import NetProfitIndicator from './NetProfitIndicator'
import CurrentRatio from './CurrentRatio'
import './Indicator.css'

const Indicator = props => {
    // console.log(`Revenue: ${props.revenue}`)
    return (
        <div className="indicator">
            <div className="indicator-title">
                <p className="text-timple">{props.title}</p>
            </div>
            <div className="indicator-body">
                {props.chart === 'pie' ? 
                    <NetProfitIndicator 
                        data={props.data} 
                        text={props.text}/> :
                    <CurrentRatio 
                        data={props.data}
                        index={props.index}
                        text={props.index >= 3 ? 'Ótimo' : 'Ruim'} />}
                
            </div>
        </div>
    )
}

export default Indicator