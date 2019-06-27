import React from "react";
import Buttons from "./PlainButton";
import styles from "../forms/styles.module.scss";

type MyProps = {
  label?: string;
  handleClick?(): void;
};

class AddandCancelButton extends React.Component<MyProps> {
  render() {
    return (
      <span className={styles.position}>
        <Buttons label={"Cancel"} />
        <Buttons label={"Add"} variant={"outlined"} />
      </span>
    );
  }
}

export default AddandCancelButton;
