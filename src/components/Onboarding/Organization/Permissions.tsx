import React from "react";
import InputField from "../Workspace/InputField";
import styles from "./organization.module.scss";
import Buttons from "../Workspace/PlainButton";
import RadioButtons from "./RadioButton";
import CheckboxesGroup from "./CheckboxesGroup";

class Permissions extends React.Component {
  render() {
    return (
      <div>
        <p>Permissions:</p>

        <div className={styles.innerdiv}>
          <div className={styles.d1}>
            <RadioButtons />
          </div>
          <div className={styles.d2}>
            <Buttons label={"Select"} />
            <Buttons label={"DeSelect All"} />
          </div>
        </div>
        <CheckboxesGroup />
      </div>
    );
  }
}
export default Permissions;
