import React from "react";
import AddOrganizationDomain from "./AddOrganizationDomain";
import AddWorkspaceManagers from "./AddWorkspaceManager";
import InputField from "./InputField";
import styles from "../styles.module.scss";

const WorkspaceContainer: React.FC = () => {
  return (
    <div className="WorkspaceContainer">
<<<<<<< HEAD
      <span>
        <InputField placeholder={"Workspace Name"} />
        <span className={styles.textfield}>
          <InputField placeholder={"Owner"} />
        </span>
      </span>
      <AddOrganizationDomain />
      <AddWorkspaceManagers />
=======
      <p>WorkspaceContainer</p>
>>>>>>> 742c95b87cf245af05daa92dea841fe808670f6a
    </div>
  );
};

export default WorkspaceContainer;
