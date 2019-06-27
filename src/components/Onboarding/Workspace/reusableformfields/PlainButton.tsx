import React from "react";
import Button from "@material-ui/core/Button";

type MyProps = {
  label?: string;
  variant?: any;
  handleClick?(): void;
};

class Buttons extends React.Component<MyProps> {
  render() {
    return (
      
      <Button
        
        variant={this.props.variant}
        color="primary"
        onClick={this.props.handleClick}
      >
        {this.props.label}
      </Button>
      
    );
  }
}

export default Buttons;
