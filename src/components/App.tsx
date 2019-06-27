import React from "react";
import "./App.scss";
import OnboardingContainer from './Onboarding/OnboardingContainer';
import Permissions from './Onboarding/Organization/AddRolePermissions/Permissions'
import AddWorkforceContainer from '../components/Onboarding/Organization/AddWorkforce/AddWorkforceContainer'
const App: React.FC = () => {
  return (
    <div className="App">
      <AddWorkforceContainer/>
    </div>
  );
};

export default App;
