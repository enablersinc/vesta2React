import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";

export default function RadioButtons() {
  const [value, setValue] = React.useState(true);

  function handleChange(event: {
    target: { value: React.SetStateAction<boolean> };
  }) {
    setValue(event.target.value);
  }

  return (
    <FormControl component="fieldset">
      <FormControlLabel
        value={value}
        control={<Radio color="default" />}
        label="Same as immediate senior"
        labelPlacement="end"
      />
    </FormControl>
  );
}
