import React from 'react'

import { VictoryLabel, VictoryPie } from 'victory'

export default class CurrentRatio extends React.Component {
    render() {
        return (
            <svg viewBox="0 0 212 192">
                <VictoryPie
                    startAngle={105}
                    endAngle={-105}
                    standalone={false}
                    width={212} height={192}
                    data={this.props.data}
                    innerRadius={68} labelRadius={100}
                    style={{ labels: { fontSize: 20, fill: "white"} }}
                    colorScale={["#d9d9d9", "#07A485"]}
                />
                <VictoryLabel
                    textAnchor="middle"
                    style={{ fontSize: 32, fill: "#07a485" }}
                    x={106} y={96}
                    text={"3,4"}
                />
                <VictoryLabel
                    textAnchor="middle"
                    style={{ fontSize: 20, fill: "#5e5e5e" }}
                    x={106} y={120}
                    text={"Ótimo"}
                />
                <VictoryLabel
                    textAnchor="middle"
                    style={{ fontSize: 16, fill: "#d9d9d9" }}
                    x={106} y={144}
                    text={"Mínimo: 3,0"}
                />
            </svg>
            
        )
    }
}