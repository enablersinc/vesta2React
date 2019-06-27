import React from "react";
import TextField from "@material-ui/core/TextField";
import styles from "../styles.module.scss";

type MyProps = {
  placeholder?: string;
  handleChange?(): void;
};

class InputField extends React.Component<MyProps> {
  render() {
    return (
      <TextField
        className={styles.field}
        type="text"
        variant="outlined"
        placeholder={this.props.placeholder}
        onChange={this.props.handleChange}
      />
    );
  }
}
export default InputField;
