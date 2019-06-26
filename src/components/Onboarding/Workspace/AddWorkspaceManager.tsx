import React from "react";
import AddInput from "./AddInput";
import Buttons from "./PlainButton";
import styles from "../styles.module.scss";
import DisplayField from "./DisplayField";

type MyProps = {
  placeholder?: string;
  label?: string;
};

class AddWorkspaceManagers extends React.Component<MyProps> {
  invites = ["john", "peter", "chris"];
  render() {
    return (
      <div>
        <h4 className={styles.heading}>{"WORKSPACE MANAGERS"}</h4>
        <div className={styles.div}>
          <AddInput placeholder={"Invite Email"} Buttonlabel={"Add"} />
          {this.invites.map(invite => {
            return <DisplayField product={invite} />;
          })}

          <span className={styles.position}>
            <Buttons label={"Cancel"} />
            <Buttons label={"Add"} />
          </span>
        </div>
      </div>
    );
  }
}

export default AddWorkspaceManagers;