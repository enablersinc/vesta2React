import React from "react";
import Button from "@material-ui/core/Button";
import styles from "./styles.module.scss";

type MyProps = {
  label?: string;
  handleClick?(): void;
};

class Buttons extends React.Component<MyProps> {
  render() {
    return (
      <span>
        <Button
          className="button1"
          //variant="contained"
          color="primary"
          onClick={this.props.handleClick}
        >
          {this.props.label}
        </Button>
      </span>
    );
  }
}

export default Buttons;
