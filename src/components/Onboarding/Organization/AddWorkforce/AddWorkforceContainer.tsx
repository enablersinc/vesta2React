import React from "react";
import AddandCancelButton from "../../Workspace/AddandCancel";
import styles from "./AddWorkforce.module.scss";
import InputField from "./InputField";
import DropDown from "./Dropdown";

class AddWorkforceContainer extends React.Component {
  render() {
    return (
      <div className={styles.div}>
        <div>
          <InputField placeholder={"Role Name"} />
          <span className={styles.margins}>
            <DropDown label={"Field Engineer"} />
          </span>
        </div>
        <br />
        <div>
          <DropDown label={"Location"} />
          <span className={styles.margins}>
            <DropDown label={"Reports To"} />
          </span>
        </div>
        <AddandCancelButton />
      </div>
    );
  }
}
export default AddWorkforceContainer;
