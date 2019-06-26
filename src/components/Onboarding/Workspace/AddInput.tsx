import React from "react";
import InputField from "./InputField";
import Buttons from "./PlainButton";
import styles from "../styles.module.scss";

type MyProps = {
  placeholder?: string;
  Buttonlabel?: string;
};

class AddInput extends React.Component<MyProps> {
  render() {
    return (
      <span>
        <span>
          <InputField placeholder={this.props.placeholder} />
        </span>
        <span className={styles.button}>
          <Buttons label={this.props.Buttonlabel} />
        </span>
      </span>
    );
  }
}
export default AddInput;
