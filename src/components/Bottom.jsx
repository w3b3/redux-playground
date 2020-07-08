import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
});

export default function Bottom() {
  const classes = useStyles();

  return (
    <Card raised={true} className={classes.root}>
      <CardContent>
        <Typography className={classes.title}>Photo of the day</Typography>
        <Link
          color={"secondary"}
          gutterBottom={true}
          href={"https://unsplash.com/photos/VjM2t7VH9Uo"}
        >
          Source
        </Link>
        <CardMedia
          className={classes.media}
          image="images/paella.jpeg"
          title="Paella dish"
        />
      </CardContent>
      <CardActions>
        <Button size="small">Previous</Button>
        <Button size="small">Next</Button>
      </CardActions>
    </Card>
  );
}
