import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Spacer from 'react-spacer'
import {Box, Button, Grid,  Card} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import { Link } from 'react-router-dom'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import AddIcon from '@material-ui/icons/Add';
import green from '@material-ui/core/colors/green';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    palette: {
      tertiary: green[500],
    },
    card: {
      width: 300,
      margin: 4
    },
    media: {
      height: 140,
    },
    cardInner: {
      marginTop: '41%',
      marginBottom: '41%'
    },
    control: {
      padding: theme.spacing(4),
    },
  }));

  // Data from GraphQL 
  // from modelConfig table filtered by userID

  const modelConfigID = "{id}"
  const instanceState = "true"
  const instanceName = "{instanceName}"
  const instanceLocation = "{instanceLocation}"
  const instancePod = "{instancePod}"

  // from model table, connected to modelConfig on modelID

  const modelImage = "https://zepappassets.s3-ap-southeast-2.amazonaws.com/1_Co8xD0IWPaBiWr-Xfu38dw.jpeg"
  const modelDescription = "{modelDescription}"


  export default function Studio() {
    const classes = useStyles();

   return (
            <div>
            <Box bgcolor="primary.dark" color="primary.contrastText" p={4} >
                <h1  className={s.header} style={{textAlign: 'center'}}>
                Vision Studio                
                </h1>
                
                </Box>
                <Box>
                <Spacer height="50px"/>
                <Grid item>
                 
                  </Grid>
                  <Spacer height="50px"/>
                <Grid container alignItems="center" justify="center">
                  <Grid item md={8}>
                  <div className="devnotes">
                  <h3>{"<"}DeveloperNotes{">"}</h3>
                  <p>Display every modelConfig instance associated with current {"userID"} as a card </p>
                  <h3>{"</"}DeveloperNotes{">"}</h3>
                </div>
                  <Grid container alignItems="center" justify="center" spacing={2}>

                  <Link to="/library">
                  <Card className={classes.card}>
                  <CardContent className={classes.cardInner}>
                  <AddIcon style={{ fontSize: 50 }}/>
                  </CardContent>
                  </Card>
                  </Link>

                  <Link to={`/studio/${modelConfigID}`}>
                  <Card className={classes.card}>
                  <CardActionArea>
                  <CardMedia
                  component="img"
                  alt={modelDescription}
                  height="140"
                  image={modelImage}
                  title={instanceName}
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {instanceName}
                  </Typography>
                  <Spacer height="10px"/>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {instanceLocation}
                  </Typography> 
                  <Typography variant="body2" color="textSecondary" component="p">
                    {instancePod}
                  </Typography>
                  <Spacer height="10px"/>
                  <Typography variant="body2" color="textSecondary" component="p">
                    State: {instanceState}
                  </Typography>
                  </CardContent>
                  <Button href={`/studio/${modelConfigID}`}>
                    View
                  </Button>
                  </CardActionArea>
                  </Card>
                  </Link>

                  <Spacer height="25px"/>
               
                    </Grid>
                    </Grid>
                </Grid>
                <Spacer height="100px"/>
            </Box>
            </div>

   )
   }