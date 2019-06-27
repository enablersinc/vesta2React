import React from "react";
import { SvgIcon } from "@material-ui/core";
import styles from "../forms/styles.module.scss";

type MyProps = {
  handleClick?(): void;
};
class DeleteIconButton extends React.Component<MyProps> {
  render() {
    return (
      <button
        style={{ background: "none", border: "none" }}
        type="button"
        onClick={this.props.handleClick}
      >
        <SvgIcon className={styles.iconbutton}>
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
        </SvgIcon>
      </button>
    );
  }
}

export default DeleteIconButton;
