import React from "react";
import EditButtons from "./EditButtons";
import styles from "../forms/styles.module.scss";
import { Box } from "@material-ui/core";

type MyProps = {
  product?: string;
  index?: number;
};

class DisplayField extends React.Component<MyProps> {
  render() {
    return (
      <Box flexWrap="nowrap" className={styles.outerdiv}>
        <Box className={styles.leftdiv} key={this.props.index} mt={2}>
          {this.props.product}
        </Box>
        <Box mt={1} className={styles.rightdiv}>
          <EditButtons />
        </Box>
      </Box>
    );
  }
}
export default DisplayField;
