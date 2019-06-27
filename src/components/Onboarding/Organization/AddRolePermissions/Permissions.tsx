import React from "react";
import styles from "../organization.module.scss";
import Buttons from "../../Workspace/reusableformfields/PlainButton";
import RadioButtons from "../shared/RadioButton";
import CheckboxesGroup from "./CheckboxesGroup";
import { Box } from '@material-ui/core';
import AddRole from './AddRole';
import AddandCancelButton from "../../Workspace/reusableformfields/AddandCancel";

class Permissions extends React.Component {
  render() {
    return (
    <Box className={styles.div}>
      <AddRole/>
        <Box className={styles.innerdiv}>
          <Box className={styles.d3}>
            <RadioButtons />
            <CheckboxesGroup/>
          </Box>
          <Box mt={0.5} className={styles.d4}>
            <Buttons label={"Select"} />
            <Buttons label={"DeSelect All"} />
          </Box>
        </Box>
        <Box mt={10}>
        <AddandCancelButton />
        </Box>
        </Box>
    );
  }
}
export default Permissions;
