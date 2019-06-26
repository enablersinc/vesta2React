import React from "react";
import { TextField, makeStyles, createStyles, Theme } from "@material-ui/core";
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
      margin: theme.spacing(1)
    },
    textField: {
      flexBasis: 200
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
    <div className="WorkspaceFields">
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
    </div>
  );
};

export default WorkspaceFields;
