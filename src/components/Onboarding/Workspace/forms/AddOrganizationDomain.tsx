import React from "react";
import AddInput from "./AddInput";
import styles from "../styles.module.scss";
import DisplayField from "./DisplayField";
import AddandCancelButton from "./AddandCancel";

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
          <AddInput placeholder={"Organization Domain"} Buttonlabel={"Add"} />
          {this.domains.map((domain, index) => {
            return (
              <span key={index}>
                <DisplayField product={domain} index={index} />
              </span>
            );
          })}

          <AddandCancelButton />
        </div>
      </div>
    );
  }
}

export default AddOrganizationDomain;
