import React from "react";
import EditButtons from "./EditButtons";
import styles from "../styles.module.scss";

type MyProps = {
  product?: string;
};

class DisplayField extends React.Component<MyProps> {
  render() {
    return (
      <div>
        <div className={styles.diva}>
          <div className={styles.d1}>{this.props.product}</div>
          <div className={styles.d2}>
            <EditButtons />
          </div>
        </div>
      </div>
    );
  }
}
export default DisplayField;
