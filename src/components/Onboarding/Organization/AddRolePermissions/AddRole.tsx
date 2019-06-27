import React from "react";
import InputField from "../shared/InputField";


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
