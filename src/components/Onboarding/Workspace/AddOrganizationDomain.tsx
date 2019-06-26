import React from "react";
import AddInput from "./AddInput";
import Buttons from "./PlainButton";
import styles from "../styles.module.scss";
import DisplayField from "./DisplayField";

type MyProps = {
  placeholder?: string;
  label?: string;
};

class AddOrganizationDomain extends React.Component<MyProps> {
  domains = ["chair", "table", "sofa"];
  render() {
    return (
      <div>
        <h4 className={styles.heading}>{"DOMAIN"}</h4>
        <div className={styles.div}>
          <AddInput placeholder={"Organization Domain"} Buttonlabel={"Add"} />
          {this.domains.map((domain, index) => {
            return (
              <div key={index}>
                <DisplayField product={domain} index={index} />
              </div>
            );
          })}

          <span className={styles.position}>
            <Buttons label={"Cancel"} />
            <Buttons label={"Add"} />
          </span>
        </div>
      </div>
    );
  }
}

export default AddOrganizationDomain;
