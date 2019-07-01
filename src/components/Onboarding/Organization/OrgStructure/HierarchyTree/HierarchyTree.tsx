import React from "react";
import {
  Box,
  ExpansionPanel,
  ExpansionPanelSummary,
  Typography,
  ExpansionPanelDetails
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
          <Box key={index} m={1}>
            <ExpansionPanel defaultExpanded={index === 0}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography>{obj.name}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <HierarchyTree hierarchyTree={obj.children} />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </Box>;
        })}
      </div>
    );
  }
}

export default HierarchyTree;
