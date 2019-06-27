import React from "react";
import styles from "../organization.module.scss";
import Buttons from "../../Workspace/reusableformfields/PlainButton";
import RadioButtons from "../shared/RadioButton";
import CheckboxesGroup from "./CheckboxesGroup";
import { Box } from '@material-ui/core';

class Permissions extends React.Component {
  render() {
    return (
      <Box className={styles.div} >
        <p>Permissions:</p>

        <Box className={styles.innerdiv}>
          <Box className={styles.d1}>
            <RadioButtons />
          </Box>
          <Box className={styles.d2}>
            <Buttons label={"Select"} />
            <Buttons label={"DeSelect All"} />
          </Box>
        </Box>
        <CheckboxesGroup />
      </Box>
    );
  }
}
export default Permissions;
