import React, { Component } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { scaleOrdinal } from "@visx/scale";
import { LegendOrdinal, LegendItem, LegendLabel } from "@visx/legend";
import { Typography } from "@material-ui/core";

export default class PieChart extends Component {
  constructor(props) {
    super(props);

    this.sort = (a, b) => a - b;
  }

  values = (d) => d.value;
  colours = (d) => d.colour;

  colourScale = scaleOrdinal({
    domain: this.props.data.map((l) => l.legend),
    range: this.props.data.map((l) => l.colour),
  });

  render() {
    return (
      <div>
        <Typography variant="h5" style={{ marginBottom: "20px" }}>
          {this.props.title}
        </Typography>
        <LegendOrdinal
          scale={this.colourScale}
          domain={this.props.data.map((l) => l.legend)}
        >
          {(labels) =>
            labels.map((label) => {
              return (
                <LegendItem key={`legend-${label.text}-${label.index}`}>
                  <svg width={10} height={10} style={{ margin: "5px 5px" }}>
                    <circle
                      fill={this.colours(this.props.data[label.index])}
                      r={10 / 2}
                      cx={10 / 2}
                      cy={10 / 2}
                    />
                  </svg>
                  <LegendLabel align="left" margin="0 4px">
                    <Typography>{label.text}</Typography>
                  </LegendLabel>
                </LegendItem>
              );
            })
          }
        </LegendOrdinal>
        <svg width={200} height={250}>
          <Group top={130} left={100}>
            <Pie
              data={this.props.data}
              pieValue={this.values}
              outerRadius={this.props.outerRadius}
              startAngle={0}
              pieSortValues={this.sort}
            >
              {(pie) => {
                return pie.arcs.map((arc, i) => (
                  <g key={`pie-arc-${i}`}>
                    <path
                      d={pie.path(arc) || ""}
                      fill={this.colours(arc.data)}
                    />
                  </g>
                ));
              }}
            </Pie>
          </Group>
        </svg>
      </div>
    );
  }
}
