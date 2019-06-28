import React from "react";
import AddandCancelButton from "../../Workspace/reusableformfields/AddandCancel";
import styles from "./AddWorkforce.module.scss";
import InputField from "../AddWorkforce/InputField";
import DropDown from "./Dropdown";
import {
  Box,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField
} from "@material-ui/core";
class AddWorkforceContainer extends React.Component {
  render() {
    return (
      <Box>
        <Box display="flex" className={styles.innerdiv}>
          <Box flexDirection="start" className={styles.leftdiv}>
            <Box>
              <InputField placeholder={"Employee Email"} />
            </Box>
            <Box className={styles.field} mt={3}>
              {" "}
              <DropDown label={"Location"} />
            </Box>
          </Box>
          <Box flexDirection="end" className={styles.rightdiv}>
            <Box width="100%" className={styles.field} ml={6}>
              <DropDown label={"Role"} />
            </Box>
            <Box ml={6} mt={3.5}>
              {" "}
              <DropDown label={"Reports To"} />
            </Box>
          </Box>
        </Box>
        <Box mt={2} mr={3}>
          <AddandCancelButton />
        </Box>
      </Box>
    );
  }
}
export default AddWorkforceContainer;
