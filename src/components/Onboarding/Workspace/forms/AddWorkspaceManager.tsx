import React from "react";
<<<<<<< HEAD:src/components/Onboarding/Workspace/AddWorkspaceManager.tsx
import AddInput from "./AddInput";
import Buttons from "./PlainButton";
import styles from "../styles.module.scss";
import DisplayField from "./DisplayField";
import AddandCancelButton from "./AddandCancel";
import { Box } from '@material-ui/core';
=======
import AddInput from "../reusableformfields/AddInput";
import styles from "./styles.module.scss";
import DisplayField from "../reusableformfields/DisplayField";
import AddandCancelButton from "../reusableformfields/AddandCancel";
>>>>>>> 3fd752b2251fa3cdc3f5d0e2b5ae69a07eaa9932:src/components/Onboarding/Workspace/forms/AddWorkspaceManager.tsx

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
