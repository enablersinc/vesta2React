import React from "react";
import EditButtons from "./EditButtons";
import styles from "../forms/styles.module.scss";

type MyProps = {
  product?: string;
  index?: number;
};

class DisplayField extends React.Component<MyProps> {
  render() {
    return (
      <div className={styles.outerdiv}>
        <div className={styles.leftdiv} key={this.props.index}>
          {this.props.product}
        </div>
        <span className={styles.rightdiv}>
          <EditButtons />
        </span>
      </div>
    );
  }
}
export default DisplayField;
