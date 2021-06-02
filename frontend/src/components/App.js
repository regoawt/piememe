import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import TextBox from "./TextBox";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Chart",
      primaryLegendItem: "No",
      primaryColour: "red",
      secondaryColour: "blue",
      secondarySegmentFraction: 0.1,
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handlePrimaryLegendItem = this.handlePrimaryLegendItem.bind(this);
    this.handlePrimaryColour = this.handlePrimaryColour.bind(this);
    this.handleSecondaryColour = this.handleSecondaryColour.bind(this);
    this.handleSecondarySegmentFraction =
      this.handleSecondarySegmentFraction.bind(this);
  }

  handleTitleChange(titleValue) {
    this.setState({ title: titleValue });
  }

  handlePrimaryLegendItem(primaryLegendItemValue) {
    this.setState({ primaryLegendItem: primaryLegendItemValue });
  }

  handlePrimaryColour(primaryColourValue) {
    this.setState({ primaryColour: primaryColourValue });
  }

  handleSecondaryColour(secondaryColourValue) {
    this.setState({ secondaryColour: secondaryColourValue });
  }

  handleSecondarySegmentFraction(secondarySegmentFractionValue) {
    this.setState({ secondarySegmentFraction: secondarySegmentFractionValue });
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
              <TextBox
                label="Title"
                value={this.state.title}
                onChange={this.handleTitleChange}
              />
            </Grid>
            <Grid item>
              <TextBox
                label="Legend"
                value={this.state.primaryLegendItem}
                onChange={this.handlePrimaryLegendItem}
              />
            </Grid>
            <Grid item>
              <TextBox
                label="Colour #1"
                value={this.state.primaryColour}
                onChange={this.handlePrimaryColour}
              />
            </Grid>
            <Grid item>
              <TextBox
                label="Colour #2"
                value={this.state.secondaryColour}
                onChange={this.handleSecondaryColour}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
