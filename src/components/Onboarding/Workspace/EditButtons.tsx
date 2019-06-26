import React from "react";
import DeleteIconButton from "./DeleteIconButton";
import EditIconButton from "./EditIconButton";

class EditButtons extends React.Component {
  render() {
    return (
      <span>
        <EditIconButton />
        <DeleteIconButton />
      </span>
    );
  }
}
export default EditButtons;
