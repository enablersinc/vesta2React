import React from "react";
import Permissions from "./Permissions";
import AddandCancelButton from "../../Workspace/reusableformfields/AddandCancel";
import AddRole from "./AddRole";
import styles from "./organization.module.scss";

class RolePermissions extends React.Component {
  render() {
    return (
      <div className={styles.div}>
        <AddRole placeholder={"Role Name"} />
        <Permissions />
        <AddandCancelButton />
      </div>
    );
  }
}
export default RolePermissions;
