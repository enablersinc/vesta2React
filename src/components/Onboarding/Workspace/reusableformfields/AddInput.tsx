import React from "react";
import InputField from "./InputField";
import Buttons from "./PlainButton";
import { Box } from "@material-ui/core";

type MyProps = {
  placeholder?: string;
  Buttonlabel?: string;
};

class AddInput extends React.Component<MyProps> {
  render() {
    return (
      <Box>
        <Box display="flex" flexWrap="nowrap">
          <InputField placeholder={this.props.placeholder} />
          <Box mt={1.5} ml={3}>
            <Buttons label={this.props.Buttonlabel} />
          </Box>
        </Box>
      </Box>
    );
  }
}
export default AddInput;
