import React from 'react'

import { VictoryChart, VictoryPie } from 'victory'

export default class NetProfitIndicator extends React.Component {
    render() {
        return (
            <VictoryChart>
                <VictoryPie 
                    data={this.props.data}
                />
            </VictoryChart>
        )
    }
}