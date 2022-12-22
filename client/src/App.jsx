import React, { useState, useEffect } from 'react'
import axios from 'axios'

import { baseApiUrl } from './global'

const App = () => {
    const [backendData, setBackendData] = useState([{}])

    useEffect(() => {
        fetch(baseApiUrl)   
            .then(response => response.json())
            .then(data => setBackendData(data))
    }, [])

    return (
        <React.Fragment>
            <p>Teste</p>
        </React.Fragment>
    )
}

export default App