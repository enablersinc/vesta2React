import React from "react";
import "./App.scss";
import OnboardingContainer from "./Onboarding/OnboardingContainer";
import Permissions from "./Onboarding/Organization/AddRolePermissions/Permissions";
import AddEmployeeDetails from "./Onboarding/Organization/AddWorkforce/AddEmployeeDetails.tsx";
import AddWorkforceContainer from "./Onboarding/Organization/AddWorkforce/AddWorkforceContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <AddWorkforceContainer />
    </div>
  );
};

export default App;
