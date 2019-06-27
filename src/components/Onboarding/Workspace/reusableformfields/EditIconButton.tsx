import React from "react";
import { SvgIcon } from "@material-ui/core";
import styles from "../forms/styles.module.scss";

type MyProps = {
  handleClick?(): void;
};

class EditIconButton extends React.Component<MyProps> {
  render() {
    return (
      <button
        className={styles.iconbutton}
        type="button"
        onClick={this.props.handleClick}
      >
        <SvgIcon>
          <path d="M14.06 9.02l.92.92L5.92 19H5v-.92l9.06-9.06M17.66 3c-.25 0-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29zm-3.6 3.19L3 17.25V21h3.75L17.81 9.94l-3.75-3.75z" />
        </SvgIcon>
      </button>
    );
  }
}

export default EditIconButton;
