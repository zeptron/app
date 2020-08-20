import React from "react";

import { Button, Card } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import { makeStyles } from "@material-ui/core/styles";
import Spacer from "react-spacer";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    width: 300,
    margin: 4,
    height: "100%",
  },
  control: {
    padding: theme.spacing(4),
  },
}));

export const ModelCard = ({ model }) => {
  const classes = useStyles();

  return (
    <div>
      <Grid item md={8}>
          <Card className={classes.card}>
            <CardActionArea>
            <Link to={`/library/${model.id}`} style={{ textDecoration: "none" }}>
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
              </Link>
              <Button href={`/library/${model.id}`}>View</Button>
            </CardActionArea>
          </Card>
        
      </Grid>
    </div>
  );
};

export default ModelCard;
