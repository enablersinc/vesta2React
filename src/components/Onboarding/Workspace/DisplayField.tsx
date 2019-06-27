import React from "react";
import EditButtons from "./reusableformfields/EditButtons";
import styles from "./forms/styles.module.scss";
import { Box } from '@material-ui/core';

type MyProps = {
  product?: string;
  index?: number;
};

class DisplayField extends React.Component<MyProps> {
  render() {
    return (
      <div className={styles.outerdiv}>
        <Box component="span" display="block" className={styles.leftdiv} key={this.props.index}>
          {this.props.product}
        </Box>
        <Box component="span" display="block" className={styles.rightdiv}>
          <EditButtons />
        </Box>
      </div>
    );
  }
}
export default DisplayField;
