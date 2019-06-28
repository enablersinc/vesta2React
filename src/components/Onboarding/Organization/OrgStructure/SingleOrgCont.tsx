import React from "react";
import { Box, MenuItem, TextField } from "@material-ui/core";
import "./SingleOrgCont.scss";
import HierarchyTree from "./HierarchyTree/HierarchyTree";

type myProps = {
  organization: {
    name: string;
    type: string;
    orgHierarchy: Array<any>;
    workforce: Array<Object>;
  };
};
const typeOptions = [
  "CSP Service Provider",
  "Service Provider A",
  "Service Provider B",
  "Service Provider C"
];

class SingleOrgCont extends React.Component<myProps> {
  // constructor(props: myProps) {
  //   super(props);
  // }

  logChange = (event: any) => {
    event.preventDefault();
    console.log(event.target.value);
  };

  render() {
    const _data = this.props.organization;
    const _types = typeOptions;
    return (
      <div className={"fullWidth"}>
        <Box width={100}>
          <form autoComplete="off">
            <TextField
              select
              variant="outlined"
              value={_data.type}
              onChange={this.logChange}
              inputProps={{ name: "age", id: "outlined-age-simple" }}
              className={"typeSelect"}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {_types.map((val, i) => {
                return (
                  <MenuItem value={val} key={i}>
                    {val}
                  </MenuItem>
                );
              })}
            </TextField>
          </form>
        </Box>
        <Box>
          <HierarchyTree hierarchyTree={_data.orgHierarchy} />
        </Box>
      </div>
    );
  }
}

export default SingleOrgCont;
