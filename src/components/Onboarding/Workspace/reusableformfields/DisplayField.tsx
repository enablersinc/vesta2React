import React from "react";
import EditButtons from "./EditButtons";
<<<<<<< HEAD:src/components/Onboarding/Workspace/DisplayField.tsx
import styles from "../styles.module.scss";
import { Box } from '@material-ui/core';
=======
import styles from "../forms/styles.module.scss";
>>>>>>> 3fd752b2251fa3cdc3f5d0e2b5ae69a07eaa9932:src/components/Onboarding/Workspace/reusableformfields/DisplayField.tsx

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
