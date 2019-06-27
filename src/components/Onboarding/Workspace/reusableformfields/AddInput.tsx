import React from "react";
import InputField from "./InputField";
import Buttons from "./PlainButton";
import styles from "../forms/styles.module.scss";

type MyProps = {
  placeholder?: string;
  Buttonlabel?: string;
};

class AddInput extends React.Component<MyProps> {
  render() {
    return (
      <div>
        <div>
          <InputField placeholder={this.props.placeholder} />
        </div>
        <div className={styles.button}>
          <Buttons label={this.props.Buttonlabel} />
        </div>
      </div>
    );
  }
}
export default AddInput;
