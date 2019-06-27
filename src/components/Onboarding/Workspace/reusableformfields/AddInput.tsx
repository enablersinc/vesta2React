import React from "react";
import InputField from "./reusableformfields/InputField";
import Buttons from "./reusableformfields/PlainButton";
import styles from "../styles.module.scss";

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
