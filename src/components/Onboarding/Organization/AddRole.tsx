import React from "react";
import InputField from "../Workspace/InputField";
import SingleCheckbox from "./SingleCheckbox";
import styles from "./organization.module.scss";

type MyProps = {
  placeholder?: string;
};

class AddRole extends React.Component<MyProps> {
  render() {
    return (
      <div>
        <InputField placeholder={this.props.placeholder} />
      </div>
    );
  }
}
export default AddRole;
