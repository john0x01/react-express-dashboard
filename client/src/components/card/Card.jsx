import React from 'react'
import './Card.css'

const Card = props => {
    return (
        <div className="card">
            <div className="card-title">
                <p className='text-simple'>{props.title}</p>
            </div>
            <div className="card-body">
                <p className='text-hero'>{props.body}</p>
                <span
                    className={`text-percentage${props.percentage[0] == '-' ? '-red' : ''}`}
                >
                    {props.percentage}%
                </span>
                <span className='text-card-compare'>vs. mês anterior</span>
            </div>
        </div>
    )
}

export default Card