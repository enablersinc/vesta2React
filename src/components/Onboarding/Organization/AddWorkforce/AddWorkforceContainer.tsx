import React from "react";
import AddandCancelButton from "../../Workspace/reusableformfields/AddandCancel";
import styles from "./AddWorkforce.module.scss";
import InputField from "../AddWorkforce/InputField";
import DropDown from "./Dropdown";
import { Box } from '@material-ui/core';

class AddWorkforceContainer extends React.Component {
  render() {
    return (
      <Box >
        <div className={styles.div}>
          <InputField placeholder={'Employee Email'}/>
          <DropDown/>
          
        </div>
      </Box>
    );
  }
}
export default AddWorkforceContainer;
