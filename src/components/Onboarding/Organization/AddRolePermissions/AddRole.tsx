import React from "react";
import InputField from "../shared/InputField";
import { Box } from '@material-ui/core';
import SingleCheckBox from '../shared/SingleCheckbox' 
import styles from "../organization.module.scss";


type MyProps = {
  placeholder?: string;
};

class AddRole extends React.Component<MyProps> {
  render() {
    return (
      <Box className={styles.innerdiv}>
        <Box className={styles.inputleft}><InputField placeholder={this.props.placeholder} /></Box>
        <Box className={styles.buttonright}><SingleCheckBox label={'Field User'} /></Box>
      </Box>
    );
  }
}
export default AddRole;
