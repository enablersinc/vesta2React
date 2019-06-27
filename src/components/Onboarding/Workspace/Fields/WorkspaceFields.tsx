import React from "react";
import styles from "../forms/styles.module.scss";
import {
  TextField,
  makeStyles,
  createStyles,
  Theme,
  Box
} from "@material-ui/core";
import clsx from "clsx";
import "./WorkspaceFields.scss";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // display: "flex",
      // justifyContent: "flex-start"
      // flexWrap: "wrap"
    },
    margin: {
      marginRight: theme.spacing(3)
    },
    textField: {
      flexBasis: "45%"
      //width: "45%"
    }
  })
);

interface State {
  amount: string;
  password: string;
  weight: string;
  weightRange: string;
  showPassword: boolean;
}

const WorkspaceFields: React.FC = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState<State>({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  });

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <Box width="50%" className="WorkspaceFields" m={0} p={0}>
      <TextField
        id="outlined-adornment-weight"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="WORKSPACE NAME"
        value={values.weight}
        onChange={handleChange("weight")}
        InputProps={{}}
      />
      <TextField
        id="outlined-adornment-weight"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        label="OWNER"
        value={values.weight}
        onChange={handleChange("weight")}
        InputProps={{}}
      />
    </Box>
  );
};

export default WorkspaceFields;
