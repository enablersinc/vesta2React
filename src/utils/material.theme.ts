import createPalette from "@material-ui/core/styles/createPalette";
const theme = {
  palette: createPalette({
    primary: {
      main: "#3FBEFC"
    },
    secondary: {
      main: "#F48024"
    },
    contrastThreshold: 3,
    tonalOffset: 0.2
  })
};

export default theme;
