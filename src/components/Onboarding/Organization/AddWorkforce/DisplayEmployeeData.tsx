import React from "react";
import EditButtons from "../../Workspace/reusableformfields/EditButtons";
import styles from "./AddWorkforce.module.scss";
import { Box } from "@material-ui/core";

type MyProps = {
  product?: string;
  index?: number;
};

class DisplayEmployeeData extends React.Component<MyProps> {
  render() {
    return (
      <Box display="inline" width="100%">
        <Box mt={2} className={styles.inputdiv} key={this.props.index}>
          {this.props.product}
        </Box>
        <Box mt={-3} className={styles.buttonsdiv}>
          <EditButtons />
        </Box>
      </Box>
    );
  }
}
export default DisplayEmployeeData;
