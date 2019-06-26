import React from "react";
import "./App.scss";
import OnboardingContainer from "./Onboarding/OnboardingContainer";
import "./App.scss";
import RadioButtons from "./Onboarding/Organization/RadioButton";
import WorkspaceContainer from "./Onboarding/Workspace/WorkspaceContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <WorkspaceContainer />
    </div>
  );
};

export default App;
