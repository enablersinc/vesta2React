import React from "react";
import "./App.scss";
import WorkspaceContainer from "./Onboarding/Workspace/WorkspaceContainer";
import OnboardingContainer from "./Onboarding/OnboardingContainer";
import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="App">
      <WorkspaceContainer />
      <OnboardingContainer />
    </div>
  );
};

export default App;
