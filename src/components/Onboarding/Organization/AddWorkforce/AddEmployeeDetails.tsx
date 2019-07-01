import React from "react";
import AddandCancelButton from "../../Workspace/reusableformfields/AddandCancel";
import styles from "./AddWorkforce.module.scss";
import InputField from "../shared/InputField";
import DropDown from "./Dropdown";
import { Box } from "@material-ui/core";
class AddWorkforceContainer extends React.Component {
  render() {
    return (
      <div>
        <Box display="flex" className={styles.innerdiv}>
          <Box className={styles.leftdiv}>
            <Box>
              <InputField placeholder={"Employee Email"} />
            </Box>
            <Box width="100%" flexWrap="nowrap" className={styles.field} mt={3}>
              {" "}
              <DropDown label={"Location"} />
            </Box>
          </Box>
          <Box className={styles.rightdiv}>
            <Box width="100%" className={styles.field} ml={6}>
              <DropDown label={"Role"} />
            </Box>
            <Box width="100%" ml={6} mt={3}>
              {" "}
              <DropDown label={"Reports To"} />
            </Box>
          </Box>
        </Box>
        <Box mt={2} mr={3}>
          <AddandCancelButton />
        </Box>
      </div>
    );
  }
}
export default AddWorkforceContainer;
