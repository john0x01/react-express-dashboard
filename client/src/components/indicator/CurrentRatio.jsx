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
                    colorScale={["#d9d9d9", this.props.index >= 3 ? "#07A485" : "#FF3F3B" ]}
                />
                <VictoryLabel
                    textAnchor="middle"
                    style={
                        { fontSize: 32, fill: this.props.index >= 3 ? "#07A485" : "#FF3F3B" }
                    }
                    x={106} y={96}
                    text={
                        this.props.index ? this.props.index.toFixed(1).replace('.', ',') : ''
                    }
                />
                <VictoryLabel
                    textAnchor="middle"
                    style={{ fontSize: 20, fill: "#5e5e5e" }}
                    x={106} y={120}
                    text={this.props.text}
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