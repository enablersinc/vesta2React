import React from "react";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";

export default function RadioButtons() {
  const [value, setValue] = React.useState("a");

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="position"
        name="position"
        value={value}
        //onChange={handleChange}
        row
      >
        <FormControlLabel
          value={value}
          control={<Radio color="primary" />}
          label="Same as immediate senior"
          labelPlacement="end"
        />
      </RadioGroup>
    </FormControl>
  );
}
