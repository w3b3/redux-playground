import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Link from "@material-ui/core/Link";
import { Skeleton } from "@material-ui/lab";
// import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles({
  cardRoot: {
    maxWidth: 320,
    margin: 10,
  },
  title: {
    textTransform: "uppercase",
    maxWidth: "calc(100%)",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  cardsWrapper: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  link: {
    display: "inline-block",
    width: "100%",
    marginTop: 10,
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
  const { data, loading } = props;
  const classes = useStyles();
  return !loading ? (
    <Box className={classes.cardsWrapper}>
      {data.map((e) => (
        <SinglePhoto key={e.id} data={e} />
      ))}
    </Box>
  ) : (
    // <CircularProgress />
    <Box className={classes.cardsWrapper}>
      {Array(10)
        .fill("temp")
        .map((e, i) => (
          <Skeleton
            key={i}
            variant="rect"
            width={300}
            height={320}
            className={classes.cardRoot}
          />
        ))}
    </Box>
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
        <Typography
          className={classes.title}
          variant={"h6"}
          component={"h2"}
          color={"primary"}
          gutterBottom={true}>
          {data.alt_description}
        </Typography>
        <CardMedia
          className={classes.media}
          image={data.urls.thumb}
          title={data.alt_description}
        />
        <Link
          align={"right"}
          className={classes.link}
          color={"textPrimary"}
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
