import React from 'react'

import { 
    VictoryChart, VictoryBar, VictoryAxis, VictoryStack, VictoryLabel
} from 'victory'


export default class BarChart extends React.Component {
    render() {
        
        return (
            <VictoryChart
                
                domain={{ y: [-6000,6000]}}
            >
                {/* <VictoryAxis
                    tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9 ,10, 11, 12]}
                    tickFormat={["JAN", "FEV", "MAR", "ABR", "MAI", "JUN",
                        "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"]}
                /> */}
                <VictoryAxis 
                    dependentAxis
                    />
                <VictoryStack
                    colorScale={["#07A485", "#FF3F3B"]}>
                    <VictoryBar
                        data={this.props.revenue}
                        y="revenue"
                        alignment='start'
                        barWidth={24}
                        
                    />
                    <VictoryBar
                        data={this.props.outgoing}
                        y="outgoing"
                        alignment='start'
                        barWidth={24}
                    />
                    <VictoryLabel
                        textAnchor="middle"
                        style={{ fontSize: 20, fill: "#5e5eD5e" }}
                        x={240} y={250}
                        text={"JAN FEV MAR ABR MAI JUN JUL AGO SET OUT NOV DEZ"}
                    />
                </VictoryStack>

            </VictoryChart>
        )
    }
}

