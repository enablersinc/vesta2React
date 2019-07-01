import React from "react";
import styles from "./AddWorkforce.module.scss";
import { TextField, MenuItem, Box } from "@material-ui/core";

type MyProps = {
  label?: string;
  //handleClick?(): void;
};
export default function DropDown(props: MyProps) {
  const [state, setState] = React.useState({
    age: "",
    name: "hai"
  });

  return (
    <div className={styles.fullWidth}>
      <Box>
        <form autoComplete="off">
          <TextField
            select
            variant="outlined"
            value={"a"}
            // onChange={this.logChange}
            inputProps={{ name: "age", id: "outlined-age-simple" }}
            className={styles.fullWidth}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            );
          </TextField>
        </form>
      </Box>
    </div>
  );
}
