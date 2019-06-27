import React from "react";
import WorkspaceFields from "./Fields/WorkspaceFields";
import AddOrganizationDomain from "./forms/AddOrganizationDomain";
import AddWorkspaceManager from "./forms/AddWorkspaceManager";
import { Box } from "@material-ui/core";

const WorkspaceContainer: React.FC = () => {
  return (
    <Box className="WorkspaceContainer">
      <WorkspaceFields />
      <AddOrganizationDomain />
      <AddWorkspaceManager />
    </Box>
  );
};

export default WorkspaceContainer;
