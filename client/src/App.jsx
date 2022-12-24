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

    return (
        <React.Fragment>
            <div className="cards">
                <div className="cards-left">
                    <Card title="Total Receita" body="4.190" percentage="-15,8%"/>
                </div>
            </div>
            
        </React.Fragment>
    )
}

export default App