import React from "react";
import styles from "./Project.module.scss";
import ProjectDetails from "./ProjectDetails";

const ProjectContainer: React.FC = () => {
  return (
    <div className={styles.div}>
      <ProjectDetails />
    </div>
  );
};

export default ProjectContainer;
