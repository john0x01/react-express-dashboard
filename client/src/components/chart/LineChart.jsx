import React from 'react'
import { 
    VictoryChart, VictoryLine, VictoryAxis
} from 'victory'

export default class LineChart extends React.Component {
    render() {
        return (
            <VictoryChart>
                <VictoryLine 
                    data={this.props.balance}
                    y="balance"
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 }
                      }}
                    />
                    
            </VictoryChart>
        )
    }
}