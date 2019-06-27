import React from "react";
import AddInput from "../reusableformfields/AddInput";
import styles from "./styles.module.scss";
import DisplayField from "../reusableformfields/DisplayField";
import AddandCancelButton from "../reusableformfields/AddandCancel";
import { Box } from "@material-ui/core";

type MyProps = {
  placeholder?: string;
  label?: string;
};

class AddOrganizationDomain extends React.Component<MyProps> {
  domains = ["nokia", "siemens", "huawei"];
  render() {
    return (
      <div>
        <h4 className={styles.heading}>{"DOMAIN"}</h4>
        <div className={styles.div}>
          <Box>
            <AddInput placeholder={"Organization Domain"} Buttonlabel={"Add"} />
          </Box>
          <Box>
            {this.domains.map((domain, index) => {
              return (
                <span key={index}>
                  <DisplayField product={domain} />
                </span>
              );
            })}
          </Box>
          <AddandCancelButton />
        </div>
      </div>
    );
  }
}

export default AddOrganizationDomain;
