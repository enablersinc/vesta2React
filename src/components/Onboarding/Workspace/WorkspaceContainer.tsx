import React from "react";
import AddOrganizationDomain from "./AddOrganizationDomain";
import AddWorkspaceManagers from "./AddWorkspaceManager";
import InputField from "./InputField";
import styles from "../styles.module.scss";

const WorkspaceContainer: React.FC = () => {
  return (
    <div className="WorkspaceContainer">
      <span>
        <InputField placeholder={"Workspace Name"} />
        <span className={styles.textfield}>
          <InputField placeholder={"Owner"} />
        </span>
      </span>
      <AddOrganizationDomain />
      <AddWorkspaceManagers />
    </div>
  );
};

export default WorkspaceContainer;
