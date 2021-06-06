import React, { Component } from "react";
import { Grid, Paper, Button } from "@material-ui/core";
import TextBox from "./TextBox";
import SegmentSlider from "./SegmentSlider";
import PieChart from "./PieChart";
import { exportComponentAsJPEG } from "react-component-export-image";
import "../static/css/App.css";
import "../static/css/index.css";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  controlsPaper: {
    margin: "100px auto 0px auto",
    padding: "20px 20px 0px 20px",
    backgroundColor: "#f8f8ff",
  },
  piePaper: {
    margin: "100px auto 0px auto",
    padding: "20px 20px",
    backgroundColor: "#f8f8ff",
  },
  saveButton: {
    margin: "20px auto 0px auto",
    backgroundColor: "#f8f8ff",
  },
});

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Title",
      primaryLegendItem: "No",
      primaryColour: "#282c34",
      secondaryColour: "turquoise",
      secondarySegment: 10,
    };

    this.handleTextBoxChange = this.handleTextBoxChange.bind(this);
    this.handleSliderChange = this.handleSliderChange.bind(this);

    this.printComponentRef = React.createRef();
  }

  handleTextBoxChange(event) {
    // alert(event.target.name);
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSliderChange(value) {
    this.setState({ secondarySegment: value });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Grid container justify="center" spacing={2}>
          <Grid item xs="5" align="center">
            <Paper ref={this.printComponentRef} className={classes.piePaper}>
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
            <Button
              className={classes.saveButton}
              onClick={() =>
                exportComponentAsJPEG(this.printComponentRef, "test.jpg")
              }
            >
              Save
            </Button>
          </Grid>
          <Grid container item xs="2">
            <Paper className={classes.controlsPaper}>
              <Grid container item spacing={2}>
                <Grid item>
                  <TextBox
                    className="TextBox"
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
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);
