import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon icon={faTimes} />
      </button>
    );
  }
}

export default DeleteIconButton;
