import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import TextBox from "./TextBox";
import SegmentSlider from "./SegmentSlider";
import PieChart from "./PieChart";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Chart",
      primaryLegendItem: "No",
      primaryColour: "red",
      secondaryColour: "blue",
      secondarySegment: 10,
    };

    this.handleTextBoxChange = this.handleTextBoxChange.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);
  }

  handleTextBoxChange(event) {
    // alert(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSliderChange(value) {
    this.setState({ secondarySegment: value });
  }

  render() {
    return (
      <div>
        <Grid container justify="center" spacing={2}>
          <Grid item xs="6" align="center">
            <Paper>
              <PieChart
                title={this.state.title}
                data={[
                  {
                    legend: this.state.primaryLegendItem,
                    value: 200 - this.state.secondarySegment,
                    colour: this.state.primaryColour,
                  },
                  {
                    legend: `${this.state.primaryLegendItem}, but in ${this.state.secondaryColour}`,
                    value: this.state.secondarySegment,
                    colour: this.state.secondaryColour,
                  },
                ]}
                outerRadius={100}
              ></PieChart>
            </Paper>
          </Grid>
          <Grid container item xs="2" spacing={3}>
            <Grid item>
              <TextBox
                label="Title"
                name="title"
                value={this.state.title}
                onChange={this.handleTextBoxChange}
              />
            </Grid>
            <Grid item>
              <TextBox
                label="Legend"
                name="primaryLegendItem"
                value={this.state.primaryLegendItem}
                onChange={this.handleTextBoxChange}
              />
            </Grid>
            <Grid item>
              <TextBox
                label="Colour #1"
                name="primaryColour"
                value={this.state.primaryColour}
                onChange={this.handleTextBoxChange}
              />
            </Grid>
            <Grid item>
              <TextBox
                label="Colour #2"
                name="secondaryColour"
                value={this.state.secondaryColour}
                onChange={this.handleTextBoxChange}
              />
            </Grid>
            <Grid item xs={12}>
              <SegmentSlider
                label="Segment Size"
                name="secondarySegment"
                value={this.state.secondarySegment}
                onChange={this.handleSliderChange}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
