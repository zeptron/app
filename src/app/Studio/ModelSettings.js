import React from "react";

import { Link } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import AddIcon from "@material-ui/icons/Add";
import green from "@material-ui/core/colors/green";
import { Button, Grid, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Spacer from "react-spacer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  palette: {
    tertiary: green[500],
  },
  card: {
    width: 300,
    margin: 4,
    height: 330,
  },
  media: {
    height: 140,
  },
  cardInner: {
    marginTop: "41%",
    marginBottom: "41%",
  },
  control: {
    padding: theme.spacing(4),
  },
}));

export const ModelSettings = ({ modelConfig }) => {
  const classes = useStyles();

  return (
    <div>
          <Grid item md={4}>
            <Link
              to={`/studio/${modelConfig.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={modelConfig.description}
                    height="140"
                    image={modelConfig.model.image}
                    title={modelConfig.instanceName}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {modelConfig.instanceName}
                    </Typography>
                    <Spacer height="10px" />
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {modelConfig.instanceLocation}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {modelConfig.instancePod}
                    </Typography>
                    <Spacer height="10px" />
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      State: {modelConfig.instanceState.toString()}
                    </Typography>
                  </CardContent>
                  <Button href={`/studio/${modelConfig.id}`}>View</Button>
                </CardActionArea>
              </Card>
            </Link>
            </Grid>
            <Spacer height="25px" />
    </div>
  );
};

export default ModelSettings;
