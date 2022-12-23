import React, { useState, useEffect } from 'react'
import axios from 'axios'

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
            <p>Teste</p>
        </React.Fragment>
    )
}

export default App