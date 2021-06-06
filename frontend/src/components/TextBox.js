import React, { Component } from "react";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    color: "red",
  },
  input: {
    backgroundColor: "white",
  },
});

class TextBox extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event);
  }

  render() {
    const { classes } = this.props;
    return (
      <FormControl>
        <TextField
          className={classes.root}
          name={this.props.name}
          variant="filled"
          label={this.props.label}
          type="text"
          value={this.props.value}
          onChange={this.handleChange}
          InputProps={{ className: classes.input }}
        ></TextField>
      </FormControl>
    );
  }
}

export default withStyles(styles)(TextBox);
