import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Box } from "@material-ui/core";

import SingleOrgCont from "./OrgStructure/SingleOrgCont";

const apiData = [
  {
    id: 1,
    name: "Nokia",
    type: "CSP Service Provider",
    orgHierarchy: [
      {
        name: "Nokia",
        children: [
          {
            name: "Manager",
            children: [
              {
                name: "Supervisor",
                children: [
                  {
                    name: "Field Engineer",
                    children: []
                  },
                  {
                    name: "Field Engineer",
                    children: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ],
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
        {apiData.map((obj, index) => {
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
                  <SingleOrgCont organization={obj} />
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
