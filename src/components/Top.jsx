import React from "react";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useClasses = makeStyles({
  box: {
    marginBottom: 8,
  },
});

const Top = (props) => {
  const { show } = props;

  const classes = useClasses();

  return show ? (
    <Box className={classes.box}>
      <Button variant={"outlined"} disabled={true} size={"small"}>
        Call API
      </Button>
    </Box>
  ) : (
    <CircularProgress />
  );
};
export default Top;
