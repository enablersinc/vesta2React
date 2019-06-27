import React from "react";
import AddInput from "../reusableformfields/AddInput";
import styles from "./styles.module.scss";
import DisplayField from "../reusableformfields/DisplayField";
import AddandCancelButton from "../reusableformfields/AddandCancel";
import { Box } from '@material-ui/core';

type MyProps = {
  placeholder?: string;
  label?: string;
};

class AddWorkspaceManagers extends React.Component<MyProps> {
  invites = ["john@nokia.com", "peter@huawei.com", "chris@ericcson.com"];
  render() {
    return (
      <Box>
        <h4 className={styles.heading}>{"WORKSPACE MANAGERS"}</h4>
        <div className={styles.div}>
          <AddInput placeholder={"Invite Email"} Buttonlabel={"Invite"} />
          {this.invites.map((invite, index) => {
            return (
              <span key={index}>
                <DisplayField product={invite} />
              </span>
            );
          })}
          <AddandCancelButton />
        </div>
      </Box>
    );
  }
}

export default AddWorkspaceManagers;