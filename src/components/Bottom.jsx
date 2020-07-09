import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  cardRoot: {
    flex: 1,
    marginBottom: 10,
  },
  title: {
    fontSize: 14,
  },
  link: {
    fontSize: 10,
  },
  media: {
    paddingTop: "56.25%", // 16:9
  },
});
// const Bottom = (props) => {
const Bottom = React.memo(function Bottom(props) {
  const { data } = props;
  return data.length ? (
    <Box>
      {data.map((e) => (
        <SinglePhoto key={e.id} data={e} />
      ))}
    </Box>
  ) : (
    <CircularProgress />
  );
});

/*Below a comparison between React (default) and Memo*/
const SinglePhoto = (props) => {
  // const SinglePhoto = React.memo(function SinglePhoto(props) {
  const { data } = props;
  const classes = useStyles();

  return (
    <Card raised={true} className={classes.cardRoot}>
      <CardContent>
        <Typography className={classes.title}>
          {data.alt_description}
        </Typography>
        <Link
          className={classes.link}
          color={"secondary"}
          gutterBottom={true}
          href={data.links.html}
        >
          By: {`${data.user.first_name} ${data.user.last_name}`} -{" "}
          {data.user.links.html}
        </Link>
        <CardMedia
          className={classes.media}
          image={data.urls.regular}
          title={data.alt_description}
        />
      </CardContent>
      <CardActions>
        <Button size="small">Previous</Button>
        <Button size="small">Next</Button>
      </CardActions>
    </Card>
  );
}; // React default behaviour - renders twice
// }); // React memo behaviour - renders once

export default Bottom;
