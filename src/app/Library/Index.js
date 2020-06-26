import React from 'react'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles';
import Spacer from 'react-spacer'
import {Box, Button, Grid, Card} from '@material-ui/core'
import s from '../../styles/styles.module.css'
import { Link } from 'react-router-dom'
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    card: {
      width: 300,
      margin: 4
    },
    control: {
      padding: theme.spacing(4),
    },
  }));

// Data from table 

  const modelID = "template"
  const modelName = "{modelName}"
  const modelImage = "https://zepappassets.s3-ap-southeast-2.amazonaws.com/1_Co8xD0IWPaBiWr-Xfu38dw.jpeg"
  const modelDescription = "{modelDescription}"


  export default function Library() {
    const [spacing, setSpacing] = React.useState(8);
    const classes = useStyles();
  

   return (
            <div>
            <Box bgcolor="primary.dark" color="primary.contrastText" p={4} >
                <h1  className={s.header} style={{textAlign: 'center'}}>
                Model Library                
                </h1>
               
                </Box>
                
                <Spacer height="100px"/>
                <Box>
                <div className="devnotes">
                  <h3>{"<"}DeveloperNotes{">"}</h3>
                  <p>Display every model instance as a card </p>
                  <h3>{"</"}DeveloperNotes{">"}</h3>
                </div>
                </Box>
                <Grid container alignItems="center" justify="center">
                  <Grid item md={8}>
                  <Link to={`/library/${modelID}`}>
                  <Card className={classes.card}>
                  <CardActionArea>
                  <CardMedia
                  component="img"
                  alt={modelName}
                  height="140"
                  image={modelImage}
                  title={modelName}
                  />
                  <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {modelName}
                  </Typography>
                  <Spacer height="25px"/>
                  <Typography gutterBottom variant="body2" component="p">
                    {modelDescription}
                  </Typography>
                  </CardContent>
                  <Button href={`/library/${modelID}`}>
                    View
                  </Button>
                  </CardActionArea>
                  </Card>
                  </Link>
                    </Grid>
                </Grid>
                <Spacer height="100px"/>
            
            </div>

   )
   }