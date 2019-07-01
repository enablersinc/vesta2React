import React from "react";
import styles from "./Project.module.scss";
import InputField from "../Organization/AddRolePermissions/InputField";
import { Box } from "@material-ui/core";
import DropDown from "../Organization/AddWorkforce/Dropdown";

type MyProps = {
  label?: string;
};

class ProjectDetails extends React.Component<MyProps> {
  render() {
    return (
      <div className={styles.outerdiv}>
        <div>
          <Box className={styles.leftdiv}>
            <Box width="81%">
              <InputField placeholder={"Project Name"} />
            </Box>
            <Box mt={2}>
              {" "}
              <DropDown />
            </Box>
            <Box mt={2}>
              {" "}
              <DropDown />
            </Box>
          </Box>
          <Box className={styles.rightdiv}>
            <Box ml={3}>
              <DropDown />
            </Box>
            <Box mt={2} ml={3}>
              {" "}
              <DropDown />
            </Box>
            <Box mt={2} ml={3}>
              {" "}
              <DropDown />
            </Box>
          </Box>
        </div>
        <div>
          <InputField />
        </div>
      </div>
    );
  }
}
export default ProjectDetails;
