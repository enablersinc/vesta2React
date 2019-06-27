import React from "react";
import InputField from "./InputField";
import Buttons from "./PlainButton";
import styles from "../forms/styles.module.scss";
import { spacing } from '@material-ui/system';
import { Box } from '@material-ui/core';

type MyProps = {
  placeholder?: string;
  Buttonlabel?: string;
};

class AddInput extends React.Component<MyProps> {
  render() {
    return (
      <Box className={styles.outerdiv}>
        <Box className={styles.leftdiv}>
          <InputField placeholder={this.props.placeholder} />
        </Box>
        <Box mt={1} className={styles.rightdiv}>
          <Buttons  label={this.props.Buttonlabel} />
        </Box>
      </Box>
    );
  }
}
export default AddInput;
