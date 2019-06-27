import React from "react";
import "./App.scss";
import WorkspaceContainer from "./Onboarding/Workspace/WorkspaceContainer";
import "./App.scss";
import Permissions from "./Onboarding/Organization/Permissions";
import ProjectDetails from "./Onboarding/Project/ProjectDetails";
import AddWorkforceContainer from "./Onboarding/Organization/AddWorkforce/AddWorkforceContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <WorkspaceContainer />;
    </div>
  );
};

export default App;
