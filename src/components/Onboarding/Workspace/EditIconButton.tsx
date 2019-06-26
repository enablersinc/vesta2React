import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

type MyProps = {
  handleClick?(): void;
};

class EditIconButton extends React.Component<MyProps> {
  render() {
    return (
      <button
        style={{ background: "none", border: "none" }}
        type="button"
        onClick={this.props.handleClick}
      >
        <FontAwesomeIcon icon={faPencilAlt} />
      </button>
    );
  }
}

export default EditIconButton;
