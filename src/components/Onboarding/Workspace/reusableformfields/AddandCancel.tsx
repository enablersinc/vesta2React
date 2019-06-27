import React from "react";
import Buttons from "./PlainButton";
import styles from "../forms/styles.module.scss";
import { Box } from '@material-ui/core';

type MyProps = {
  label?: string;
  handleClick?(): void;
};

class AddandCancelButton extends React.Component<MyProps> {
  render() {
    return (
      <Box  className={styles.position}>
        <Buttons label={"Cancel"} />
        <Buttons label={"Add"} variant={"outlined"} />
      </Box>
    );
  }
}

export default AddandCancelButton;
