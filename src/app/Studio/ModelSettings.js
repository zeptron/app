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
    // maxWidth: '100%',
    maxWidth: 650,
    margin: 4,
    height: '100%',
  },
  media: {
    height: 450,
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
    paddingBottom: "0px",
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
          <Grid item md={12}>
            <Link
              to={`/app/studio/${modelConfig.id}`}
              style={{ textDecoration: "none" }}
            >
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={modelConfig.description}
                    height="450"
                    image={
                      modelConfig.cfStream ? (
                       `${modelConfig.cfStream}`
                      ) : (
                       `http://${modelConfig.publicIP}:${modelConfig.port || '8000'}/video_feed`
                      )
                     }
                    title={modelConfig.instanceName}
                    onError={(e)=>{e.target.onerror = null; e.target.src=`${modelConfig.model.image}`}}
                  />
                  <CardContent style={{backgroundColor: '#253337', color: 'white', zIndex: '2'}}>
                    <Typography gutterBottom variant="h5" component="h2" style={{padding: '8 8 0 8', margin: 0}}>
                      <Box style={{marginRight: 5}} component="div" display="inline"><FiberManualRecordIcon style={getStatus(modelConfig.instanceState)}/></Box>
                      <Box component="div" display="inline" className={classes.statusText}>{modelConfig.instanceName}</Box>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="primary.contrastText"
                      component="p"
                    >
                      {modelConfig.instanceLocation}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Link>
            </Grid>
            <Spacer height="25px" />
    </div>
  );
};

export default ModelSettings;
