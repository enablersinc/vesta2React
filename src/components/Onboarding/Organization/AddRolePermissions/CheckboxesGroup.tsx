import React from "react";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { Box } from "@material-ui/core";

class CheckboxesGroup extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      permissions: [
        "Create Work Order",
        "Service Appointment",
        "Edit Organization",
        "Workflow Manager"
        //"User Management",
        //"Live View Access"
      ]
    };
  }

  /*handleChange = name => event => {
    this.setState({
      ...this.state,
      [name]: event.target.checked
    });
  };*/

  render() {
    //let float=''
    return (
      <Box>
        <FormControl component="fieldset">
          {this.state.permissions.map((permission: string, index: number) => {
            return (
              <Box key={index}>
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        //checked={permission}
                        //onChange={this.handleChange("permission")}
                        value={permission}
                        color="default"
                      />
                    }
                    label={permission}
                  />
                </FormGroup>
              </Box>
            );
          })}
        </FormControl>
      </Box>
    );
  }
}

export default CheckboxesGroup;
