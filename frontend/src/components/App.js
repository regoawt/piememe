import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import AbstractTextBox from "./AbstractTextBox";
import AbstractSlider from "./AbstractSlider";

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
            <Paper>Random text</Paper>
          </Grid>
          <Grid container item xs="2" spacing={3}>
            <Grid item>
              <AbstractTextBox
                label="Title"
                name="title"
                value={this.state.title}
                onChange={this.handleTextBoxChange}
              />
            </Grid>
            <Grid item>
              <AbstractTextBox
                label="Legend"
                name="primaryLegendItem"
                value={this.state.primaryLegendItem}
                onChange={this.handleTextBoxChange}
              />
            </Grid>
            <Grid item>
              <AbstractTextBox
                label="Colour #1"
                name="primaryColour"
                value={this.state.primaryColour}
                onChange={this.handleTextBoxChange}
              />
            </Grid>
            <Grid item>
              <AbstractTextBox
                label="Colour #2"
                name="secondaryColour"
                value={this.state.secondaryColour}
                onChange={this.handleTextBoxChange}
              />
            </Grid>
            <Grid item xs={12}>
              <AbstractSlider
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
