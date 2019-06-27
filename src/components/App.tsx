import React from "react";
import "./App.scss";
import OnboardingContainer from "./Onboarding/OnboardingContainer";
import WorkspaceContainer from "./Onboarding/Workspace/WorkspaceContainer";
import "./App.scss";
import Permissions from "./Onboarding/Organization/Permissions";
import ProjectDetails from "./Onboarding/Project/ProjectDetails";
import AddWorkforceContainer from "./Onboarding/Organization/AddWorkforce/AddWorkforceContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Permissions />
    </div>
  );
};

export default App;
