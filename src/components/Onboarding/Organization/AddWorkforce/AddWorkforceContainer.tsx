import React from "react";
import styles from "./AddWorkforce.module.scss";
import AddEmployeeDetails from "./AddEmployeeDetails";
import DisplayEmployeeData from "./DisplayEmployeeData";
import { Box } from "@material-ui/core";

class AddWorkforceContainer extends React.Component {
  invites = ["john@nokia.com", "peter@huawei.com", "chris@ericcson.com"];

  render() {
    return (
      <Box>
        <h4>ADD WORKFORCE</h4>
        <Box className={styles.div}>
          <AddEmployeeDetails />
          {this.invites.map((invite, index) => {
            return (
              <Box key={index} flexWrap="nowrap" className={styles.innerdiv}>
                <DisplayEmployeeData product={invite} index={index} />
              </Box>
            );
          })}
        </Box>
      </Box>
    );
  }
}
export default AddWorkforceContainer;
