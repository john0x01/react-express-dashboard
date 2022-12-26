import React from 'react'

import { VictoryChart, VictoryBar, VictoryAxis } from 'victory'

export default class BarChart extends React.Component {
    render() {
        return (
            <VictoryChart
                domainPadding={20}>
                <VictoryBar
                    data={this.props.data}
                    x="quarter"
                    y="earnings"
                />
                <VictoryAxis 
                    tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]}
                    tickFormat={["JAN", "FEV", "MAR", "ABR", "MAI",
                        "JUN", "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"]}
                    />
                

            </VictoryChart>
        )
    }
}

