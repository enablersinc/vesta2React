import React from "react";
import EditButtons from "./EditButtons";
import styles from "../styles.module.scss";

type MyProps = {
  product?: string;
  index?: number;
};

class DisplayField extends React.Component<MyProps> {
  render() {
    return (
      <div className={styles.diva}>
        <div className={styles.d1} key={this.props.index}>
          {this.props.product}
        </div>
        <span className={styles.d2}>
          <EditButtons />
        </span>
      </div>
    );
  }
}
export default DisplayField;
