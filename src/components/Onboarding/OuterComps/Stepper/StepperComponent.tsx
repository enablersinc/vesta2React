import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import "./StepperComponent.scss";
import WorkspaceContainer from "../../Workspace/WorkspaceContainer";
import OrganizationContainer from "../../Organization/OrganizationContainer";
import AssetContainer from "../../Assetbase/AssetContainer";
import ProjectContainer from "../../Project/ProjectContainer";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "90vw"
    },
    backButton: {
      marginRight: theme.spacing(1)
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    },
    icon: {
      color: "pink !important"
    }
  })
);

function getSteps() {
  return [
    "Set up your Workspace",
    "Define your Organization",
    "Add your Asset Base",
    "Configure your Project"
    // "Select your Workspace"
  ];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return <WorkspaceContainer />;
    case 1:
      return <OrganizationContainer />;
    case 2:
      return <AssetContainer />;
    case 3:
      return <ProjectContainer />;
    default:
      return <WorkspaceContainer />;
  }
}

const StepperComponent: React.FC = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: { optional?: React.ReactNode } = {};

          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>
                {/* <StepIcon>
                  <SvgIcon>
                    <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
                  </SvgIcon>
                </StepIcon> */}
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed - you&apos;re finished
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div className={"stepperButtons"}>
            {/* <Typography className={classes.instructions} /> */}
            <Grid
              container
              direction="column"
              // justify="center"
              // alignItems="center"
              spacing={1}
            >
              <Grid item xl={12}>
                {getStepContent(activeStep)}
              </Grid>
            </Grid>

            <div>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepperComponent;
