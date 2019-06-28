import React from "react";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styles from "./AddWorkforce.module.scss";
type MyProps = {
  label?: string;
  //handleClick?(): void;
};
export default function DropDown(props: MyProps) {
  const [state, setState] = React.useState({
    age: "",
    name: "hai"
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);

  return (
    <FormControl variant="outlined">
      <InputLabel ref={inputLabel} htmlFor="outlined-age-native-simple">
        {props.label}
      </InputLabel>

      <Select
        native
        value={state.age}
        style={{ width: 200, fontSize: 12 }}
        //onChange={handleChange("age")}
        input={
          <OutlinedInput
            style={{ width: 200, fontSize: 18, borderRadius: "none" }}
            name="age"
            labelWidth={labelWidth}
            id="outlined-age-native-simple"
          />
        }
      >
        <option value="" />
        <option value={10}>Ten</option>
        <option value={20}>Twenty</option>
        <option value={30}>Thirty</option>
      </Select>
    </FormControl>
  );
}
