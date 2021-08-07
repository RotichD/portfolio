import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const IndividualProject = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea rel="noopener" target="_blank" href={props.siteLink}>
        <CardMedia
          className={classes.media}
          image={props.imgPath}
          title={props.imgTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          rel="noopener"
          target="_blank"
          href={props.repoLink}
        >
          Repository
        </Button>
        <Button
          size="small"
          color="primary"
          rel="noopener"
          target="_blank"
          href={props.siteLink}
        >
          Live Site
        </Button>
      </CardActions>
    </Card>
  );
};

export default IndividualProject;
