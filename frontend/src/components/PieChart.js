import React, { Component } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { scaleOrdinal } from "@visx/scale";

export default class PieChart extends Component {
  constructor(props) {
    super(props);

    this.getFill = (i) =>
      [this.props.primaryColour, this.props.secondaryColour][i];

    this.sort = (a, b) => a - b;
  }

  render() {
    return (
      <svg width={200} height={200}>
        <Group top={100} left={100}>
          <Pie
            data={this.props.data}
            outerRadius={this.props.outerRadius}
            startAngle={0}
            pieSortValues={this.sort}
          >
            {(pie) => {
              return (
                <Group>
                  {pie.arcs.map((arc, i) => (
                    <g key={`pie-arc-${i}`}>
                      <path d={pie.path(arc) || ""} fill={this.getFill(i)} />
                    </g>
                  ))}
                </Group>
              );
            }}
          </Pie>
        </Group>
      </svg>
    );
  }
}
