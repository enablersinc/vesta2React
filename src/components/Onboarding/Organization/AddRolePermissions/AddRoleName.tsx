import React from "react";
import InputField from "./InputField";
import { Box } from "@material-ui/core";
import SingleCheckBox from "../shared/SingleCheckbox";
import styles from "../organization.module.scss";

type MyProps = {
  placeholder?: string;
};

class AddRoleName extends React.Component<MyProps> {
  render() {
    return (
      <Box display="flex" flexWrap="nowrap" className={styles.innerdiv}>
        <Box className={styles.inputleft}>
          <InputField placeholder={"Role Name"} />
        </Box>
        <Box mt={2} ml={3} className={styles.buttonright}>
          <SingleCheckBox label={"Field User"} />
        </Box>
      </Box>
    );
  }
}
export default AddRoleName;
