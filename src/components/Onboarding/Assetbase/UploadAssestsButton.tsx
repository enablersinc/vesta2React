import React from "react";
import Buttons from "../Workspace/reusableformfields/PlainButton";
import styles from "../styles.module.scss";

type MyProps = {
  label?: string;
  handleClick?(): void;
};

class UploadAssetsButton extends React.Component<MyProps> {
  render() {
    return (
      <span className={styles.position}>
        <Buttons label={"UploadAssets"} />
      </span>
    );
  }
}

export default UploadAssetsButton;
