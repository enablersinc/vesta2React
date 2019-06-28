import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

type MyProps = {
  label?: string;
};
export default function CheckboxLabels(props: MyProps) {
  const [state, setState] = React.useState({
    checkedA: false
  });

  const handleChange = (name: string) => (event: {
    target: { checked: any };
  }) => {
    setState({ ...state, [name]: event.target.checked });
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedA}
            onChange={handleChange("checkedA")}
            value="checkedA"
            style={{ width: 8, height: 8 }}
          />
        }
        label={props.label}
      />
    </FormGroup>
  );
}
