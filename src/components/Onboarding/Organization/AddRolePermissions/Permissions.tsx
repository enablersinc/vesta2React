import React from "react";
import styles from "../organization.module.scss";
import Buttons from "../../Workspace/reusableformfields/PlainButton";
import RadioButtons from "../shared/RadioButton";
import CheckboxesGroup from "./CheckboxesGroup";
import { Box } from "@material-ui/core";
import AddRoleName from "./AddRoleName";
import AddandCancelButton from "../../Workspace/reusableformfields/AddandCancel";

class Permissions extends React.Component {
  render() {
    return (
      <Box className={styles.div}>
        <AddRoleName />
        <p>Permissions:</p>
        <Box display="flex" flexDirection="start" className={styles.innerdiv}>
          <Box className={styles.inputleft}>
            <RadioButtons />
          </Box>
          <Box justifyContent="flex-end" className={styles.buttonright}>
            <Buttons label={"Select All"} />
            <Buttons label={"DeSelect All"} />
          </Box>
        </Box>
        <CheckboxesGroup />
        <Box mb={4}>
          <AddandCancelButton />
        </Box>
      </Box>
    );
  }
}
export default Permissions;
