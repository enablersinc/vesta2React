import React from "react";
import styles from "./Project.module.scss";
import InputField from "../Organization/AddWorkforce/InputField";
import DropDown from "../Organization/AddWorkforce/Dropdown";

type MyProps = {
  label?: string;
};

class ProjectDetails extends React.Component<MyProps> {
  render() {
    return (
      <div className={styles.diva}>
        <div className={styles.d1}>
          <InputField placeholder={"Project Name"} />
          <DropDown />
          <DropDown />
          <DropDown />
        </div>
        <div className={styles.d2}>
          <DropDown />
          <DropDown />
        </div>
      </div>
    );
  }
}
export default ProjectDetails;
