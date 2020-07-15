import React from "react";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useClasses = makeStyles({
  box: {
    display: "flex",
    justifyContent: "space-between",
  },
});

const Top = (props) => {
  const { loading } = props;

  const classes = useClasses();

  return (
    <Box className={classes.box}>
      <Typography
        variant={"h4"}
        component={"h1"}
        color={"primary"}
        gutterBottom={true}>
        Photo Playground
      </Typography>
      {loading ? <CircularProgress /> : null}
    </Box>
  );
};
export default Top;
