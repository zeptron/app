import React,  { useContext, useEffect, useMemo, useState }  from "react";
import AWS from 'aws-sdk';
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
import useQuery from '../../graphql/useQuery';
import * as queries from '../../graphql/queries';

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

  const MODES = {
    MIN5: {
      key: 'MIN5',
      title: '5 min',
      seconds: 5 * 60, // 5 minutes
      timeFrom: 60 * 60, // 1 hour
    },
    MIN30: {
      key: 'MIN30',
      title: '30 min',
      seconds: 30 * 60, // 30 minutes
      timeFrom: 60 * 60 * 12, // 12 hours
    },
    HOUR1: {
      key: 'HOUR1',
      title: '1 hour',
      seconds: 60 * 60, // 1 hour
      timeFrom: 60 * 60 * 24, // 24 hours
    },
    DAY1: {
      key: 'DAY1',
      title: '1 day',
      seconds: 1440 * 60, // 1 day
      timeFrom: 1440 * 60 * 168, // 7 days
    },
  };

  const [mode, setMode] = useState(MODES.MIN30.key);
  const [analytics, setAnalytics] = useState([]);
  const modelQuery = useQuery(queries.listModelConfigs, {
    onSuccess: ({ data }) => {
      AWS.config.update({
        region: process.env.REACT_APP_AWS_REGION,
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
      });

      const DynamoDB = new AWS.DynamoDB();

      DynamoDB.scan({
        // TODO 30.07.2020 yelysei: remove test data
        // TableName: 'tableNamea6849f7e-76ef-4adb-9657-fce1207de856',
        TableName: data?.listModelConfigs?.items?.[0]?.tableName,
      }, (err, data) => {
        if (err) {
          console.error(err);
          return;
        }

        setAnalytics(data.Items);
      });
    },
  });

  // const count = 

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
              to={`/studio/${modelConfig.id}`}
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
                    <Grid container alignItems="center" justify="center">
                      <Grid item xs={3}>
                      <Box style={{marginRight: 5}} component="div" display="inline"><FiberManualRecordIcon style={getStatus(modelConfig.instanceState)}/></Box>
                      </Grid>
                      <Grid item xs={6} style={{borderRight: '1px solid black', borderLeft: '1px solid black'}}>
                      <Typography gutterBottom variant="h5" component="h2" style={{padding: '8 8 0 8', margin: 0}}>
                      <Box component="div" display="inline" className={classes.statusText}>{modelConfig.instanceName}</Box>
                    </Typography>
                    <Typography
                      variant="body2"
                      color="primary.contrastText"
                      component="p"
                    >
                      {modelConfig.instanceLocation}
                    </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        k
                      </Grid>
                    </Grid>
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
