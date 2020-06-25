import React from 'react'
import {Grid, Box, Button} from '@material-ui/core'
import s from '../../../styles/styles.module.css'
import Spacer from 'react-spacer'
import { Alert, AlertTitle } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
    root: {
      width: '100%',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }));
  

export default function Server () {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

    return (
      
    <div>   
       <div>
      
    </div>
        <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        Model instance provisioned.<strong><br/> Model timer is running</strong>
      </Alert>
   
            <p className={s.subclass}>IP: 13.89.144.34<br/><br/>PORT: 5342</p>
            <Spacer height="50px"/>
            <Button href="/model/currency/stream" variant="contained" color="primary" size="large">
                <span className={s.ctabutton}>Proceed</span>
            </Button>
    </div>
    )
}

