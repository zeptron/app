import React from "react";

import { Link } from "react-router-dom";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import green from "@material-ui/core/colors/green";
import { Button, Grid, Card } from "@material-ui/core";
import Box from '@material-ui/core/Box';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
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
  statusText: {
    verticalAlign: "top",
    lineHeight: "25px",
  },
}));

export const ModelSettings = ({ modelConfig }) => {
  const classes = useStyles();

  const getStatus = (value) => {
    if(value)
    return {color: "limegreen"}
    else 
    return {color: "red"}
  } 
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
                      <Box style={{marginRight: 5}} component="div" display="inline"><FiberManualRecordIcon style={getStatus(modelConfig.instanceState)}/></Box>
                      <Box component="div" display="inline" className={classes.statusText}>{modelConfig.instanceName}</Box>
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
                  </CardContent>
                </CardActionArea>
                <Button>View</Button>
              </Card>
            </Link>
            </Grid>
            <Spacer height="25px" />
    </div>
  );
};

export default ModelSettings;
