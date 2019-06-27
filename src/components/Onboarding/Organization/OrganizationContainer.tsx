import React from "react";
import SingleOrgCont from "./singleOrg/SingleOrgCont";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Box } from "@material-ui/core";

const source = [
  {
    id: 1,
    name: "Nokia",
    type: "CSP Service Provider",
    orgHierarchy: [{}],
    workforce: [{}]
  },
  {
    id: 2,
    name: "Siemens",
    type: "CSP Service Provider",
    orgHierarchy: [{}],
    workforce: [{}]
  },
  {
    id: 3,
    name: "Huawei",
    type: "CSP Service Provider",
    orgHierarchy: [{}],
    workforce: [{}]
  }
];

class OrganizationContainer extends React.Component {
  render() {
    return (
      <div className="OrganizationContainer">
        {source.map((obj, index) => {
          return (
            <Box key={obj.id} m={1}>
              <ExpansionPanel defaultExpanded={index === 0}>
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{obj.name}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>
                  <SingleOrgCont source={obj} />
                </ExpansionPanelDetails>
              </ExpansionPanel>
            </Box>
          );
        })}
      </div>
    );
  }
}

export default OrganizationContainer;
