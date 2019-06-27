import React from "react";
import WorkspaceFields from "./Fields/WorkspaceFields";
import AddOrganizationDomain from "./AddOrganizationDomain";
import AddWorkspaceManagers from "./AddWorkspaceManager";

const WorkspaceContainer: React.FC = () => {
  return (
    <div className="WorkspaceContainer">
      <WorkspaceFields />
      <AddOrganizationDomain />
      <AddWorkspaceManagers />
    </div>
  );
};

export default WorkspaceContainer;
