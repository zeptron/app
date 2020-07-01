import React from "react";

import { Button, Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import Spacer from "react-spacer";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    width: 300,
    margin: 4,
  },
  control: {
    padding: theme.spacing(4),
  },
}));

const classes = useStyles();

export const ModelCard = ({ model }) => {
  return (
    <div>
      <Link to={`/library/${model.id}`} />
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={model.name}
            height="140"
            image={model.image}
            title={model.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {model.name}
            </Typography>
            <Spacer height="25px" />
            <Typography gutterBottom variant="body2" component="p">
              {model.description}
            </Typography>
          </CardContent>
          <Button href={`/library/${model.id}`}>View</Button>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default ModelCard;
