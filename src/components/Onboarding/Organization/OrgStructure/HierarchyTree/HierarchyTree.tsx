import React from "react";
import {
  Box,
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./HierarchyTree.scss";

type myProps = {
  hierarchyTree: Array<{
    name: string;
    children: Array<any>;
  }>;
};

class HierarchyTree extends React.Component<myProps> {
  // constructor(props){
  //     super(props);
  // }

  render() {
    const _data = this.props.hierarchyTree;
    return (
      <div>
        {_data.map((obj, index) => {
          return (
            <Box key={index} m={1} borderLeft={1}>
              <ExpansionPanel defaultExpanded className={"expansion-panel"}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <ExpandMoreIcon />
                  <Typography>{obj.name}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  {obj.children !== undefined && obj.children.length > 0 && (
                    <HierarchyTree hierarchyTree={obj.children} />
                  )}
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Box>
          );
        })}
      </div>
    );
  }
}

export default HierarchyTree;
