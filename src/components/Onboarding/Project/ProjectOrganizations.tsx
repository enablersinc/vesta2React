import React from "react";
import styles from "./Project.module.scss";
import SingleCheckbox from "../Organization/shared/SingleCheckbox";
import DropDown from "../Organization/AddWorkforce/Dropdown";

type MyProps = {
  label?: string;
};

class Organizations extends React.Component<MyProps> {
  render() {
    return (
      <div className={styles.diva}>
        <div className={styles.d1}>
          <SingleCheckbox />
        </div>
        <div className={styles.d2}>
          <DropDown />
        </div>
      </div>
    );
  }
}
export default Organizations;
