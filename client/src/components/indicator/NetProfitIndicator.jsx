import React from 'react'

import { VictoryLabel, VictoryPie } from 'victory'

export default class NetProfitIndicator extends React.Component {
    render() {
        // console.log(`NetProfit${this.props.netProfit}`)
        return (
            <svg viewBox="0 0 212 192">
                <VictoryPie
                    width={212} height={192}
                    standalone={false}
                    data={this.props.data}
                    innerRadius={68} labelRadius={100}
                    style={{ labels: { fontSize: 20, fill: "white"} }}
                    colorScale={["#FF3F3B", "#d9d9d9"]}
                    animate={{
                        duration: 2000,
                        onLoad: { duration: 1000 }
                      }}
                />
                <VictoryLabel
                    textAnchor="middle"
                    style={{ fontSize: 24, fill: "#5e5e5e" }}
                    x={106} y={90}
                    text={`${this.props.text ? 
                        this.props.text.toFixed(1).replace('.', ','): ''}% `}
                />
                <VictoryLabel
                    textAnchor="middle"
                    style={{ fontSize: 12, fill: "#d9d9d9" }}
                    x={106} y={108}
                    text={"Objetivo: 12%"}
                />
            </svg>
            
        )
    }
}