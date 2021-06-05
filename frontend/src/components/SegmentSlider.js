import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import Slider from "@material-ui/core/Slider";
import { Typography } from "@material-ui/core";

export default class SegmentSlider extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, value) {
    this.props.onChange(value);
  }

  render() {
    return (
      <div>
        <Typography
          id={this.props.label}
          variant="caption"
          color="textSecondary"
        >
          {this.props.label}
        </Typography>
        <Slider
          name={this.props.name}
          aria-labelledby={this.props.label}
          value={this.props.value}
          onChange={this.handleChange}
        ></Slider>
      </div>
    );
  }
}
