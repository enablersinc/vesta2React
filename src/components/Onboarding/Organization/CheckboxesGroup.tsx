import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import styles from "./organization.module.scss";
import Checkbox from "@material-ui/core/Checkbox";

class CheckboxesGroup extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    this.state = {
      permissions: [
        "Create Work Order",
        "Service Appointment",
        "Edit Organization",
        "Workflow Manager",
        "User Management",
        "Live View Access"
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
    return (
      <div className={styles.d1}>
        <FormControl component="fieldset">
          {this.state.permissions.map((permission: string, index: number) => {
            return (
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
            );
          })}
        </FormControl>
      </div>
    );
  }
}

export default CheckboxesGroup;
