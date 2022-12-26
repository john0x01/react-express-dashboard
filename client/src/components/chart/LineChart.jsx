import React from 'react'
import { 
    VictoryChart, VictoryLine, VictoryAxis
} from 'victory'

export default class LineChart extends React.Component {
    render() {
        return (
            <VictoryChart>
                <VictoryAxis
                    tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11, 12]}
                    tickFormat={["J", "F", "M", "A", "M", "J",
                        "J", "A", "S", "O", "N", "D"]}
                />
                <VictoryAxis 
                    dependentAxis
                    />
                <VictoryLine 
                    style={{
                        data: {
                        stroke: "#EDE407",
                        strokeWidth: 3
                    }}}
                    data={this.props.balance}
                    y="balance"
                    alignment="start"
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 }
                      }}
                    />
                    
            </VictoryChart>
        )
    }
}