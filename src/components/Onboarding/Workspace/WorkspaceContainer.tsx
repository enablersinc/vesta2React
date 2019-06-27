import React from "react";
import WorkspaceFields from "./Fields/WorkspaceFields";
import AddOrganizationDomain from "./forms/AddOrganizationDomain";
import AddWorkspaceManagers from "./forms/AddWorkspaceManager";

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
