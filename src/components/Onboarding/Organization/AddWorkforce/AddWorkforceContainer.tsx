import React from "react";
import styles from "./AddWorkforce.module.scss";
import AddEmployeeDetails from "./AddEmployeeDetails.tsx";
import DisplayEmployeeData from "./DisplayEmployeeData";
import DisplayField from "../../Workspace/reusableformfields/DisplayField";
import { Box } from "@material-ui/core";

class AddWorkforceContainer extends React.Component {
  invites = ["john@nokia.com", "peter@huawei.com", "chris@ericcson.com"];

  render() {
    return (
      <Box className={styles.div}>
        <AddEmployeeDetails />
        {this.invites.map((invite, index) => {
          return (
            <Box flexWrap="nowrap" className={styles.innerdiv}>
              <DisplayEmployeeData product={invite} index={index} />
            </Box>
          );
        })}
      </Box>
    );
  }
}
export default AddWorkforceContainer;
