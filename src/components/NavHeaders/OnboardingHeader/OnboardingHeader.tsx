import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import clsx from "clsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import SvgIcon from "@material-ui/core/SvgIcon";
import "./OnboardingHeader.scss";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: "100vw"
    },
    backGroundColor: {
      backgroundColor: "black",
      color: "white"
    },
    title: {
      flexGrow: 1,
      "&:hover": {
        // cursor: pointer
      }
    },
    fontColor: {
      color: "white"
    }
  })
);

const OnboardingHeader: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, "clear")}>
      <AppBar position="static" className={classes.backGroundColor}>
        <Toolbar>
          <Typography
            variant="h6"
            className={clsx(classes.title, "hover")}
            color="primary"
          >
            VESTA
          </Typography>
          <Button className="whiteFont">Support</Button>
          <Button className="whiteFont">
            Hi, John
            <SvgIcon>
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
            </SvgIcon>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default OnboardingHeader;
