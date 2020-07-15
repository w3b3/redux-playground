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
    maxWidth: 320,
    margin: 10,
  },
  title: {
    fontSize: 14,
    textTransform: "capitalize",
    textDecoration: "underline",
  },
  cardsWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  link: {
    display: "inline-block",
    width: "100%",
    fontSize: 10,
  },
  media: {
    paddingTop: "56.25%", // 16:9
  },
  actions: {
    display: "flex",
    justifyContent: "space-around",
  },
});
// const Bottom = (props) => {
const Bottom = React.memo(function Bottom(props) {
  const { data } = props;
  const classes = useStyles();
  return data.length ? (
    <Box className={classes.cardsWrapper}>
      {data.map((e) => (
        <SinglePhoto key={e.id} data={e} />
      ))}
    </Box>
  ) : (
    <CircularProgress />
  );
});
// };

/*Below a comparison between React (default) and Memo*/
// const SinglePhoto = (props) => {
const SinglePhoto = React.memo(function SinglePhoto(props) {
  const { data } = props;
  const classes = useStyles();

  return (
    <Card raised={true} className={classes.cardRoot}>
      <CardContent className={classes.content}>
        <Typography className={classes.title} gutterBottom="10">
          {data.alt_description}
        </Typography>
        <CardMedia
          className={classes.media}
          image={data.urls.regular}
          title={data.alt_description}
        />
        <Link
          align={"right"}
          className={classes.link}
          color={"textSecondary"}
          gutterBottom={true}
          href={data.links.html}>
          By: {`${data.user.first_name} ${data.user.last_name}`}
        </Link>
      </CardContent>
      <CardActions className={classes.actions}>
        <Button size="small" variant={"contained"} color={"primary"}>
          Favorito
        </Button>
        <Button size="small" variant={"contained"} color={"secondary"}>
          Download
        </Button>
        <Button size="small" variant={"outlined"} color={"secondary"}>
          Arquivar
        </Button>
      </CardActions>
    </Card>
  );
  // }; // React default behaviour - renders twice
}); // React memo behaviour - renders once

export default Bottom;
