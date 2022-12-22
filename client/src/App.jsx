import React from 'react'
import axios from 'axios'

export default class App extends React.Component {

    data = []

    componentDidMount() {
        axios.get()
            .then(response => response.json())
            .then(json => console.log(json))
    }
}