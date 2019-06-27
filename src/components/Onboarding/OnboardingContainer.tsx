import React from "react";
import Grid from "@material-ui/core/Grid";
import WelcomeAboard from "./OuterComps/WelcomeAboard/WelcomeAboard";
import StepperComponent from "./OuterComps/Stepper/StepperComponent";
import OnboardingHeader from '../NavHeaders/OnboardingHeader/OnboardingHeader';

const OnboardingContainer: React.FC = () => {
  return (
    <div className="OnboardingContainer">
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
      >
        <Grid item xl={12}>
          <OnboardingHeader />
        </Grid>
        <Grid item xl={12}>
          <WelcomeAboard />
        </Grid>
        <Grid item xl={12}>
          <StepperComponent />
        </Grid>
      </Grid>
    </div>
  );
};

export default OnboardingContainer;
