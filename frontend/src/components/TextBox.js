import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";

export default class TextBox extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <FormControl>
        <TextField
          variant="outlined"
          label={this.props.label}
          type="text"
          value={this.props.value}
          onChange={this.handleChange}
        ></TextField>
      </FormControl>
    );
  }
}
