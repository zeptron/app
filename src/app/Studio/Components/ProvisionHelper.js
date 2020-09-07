import React from 'react'
import { Button } from '@material-ui/core'
import s from '../../../styles/styles.module.css'
import Spacer from 'react-spacer'
import { Alert, AlertTitle } from '@material-ui/lab';

const Server = ({ id, ip }) => {
  return (
    <div>
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        Model instance provisioned.<strong><br/> Model timer is running</strong>
      </Alert>
      <p className={s.subclass}>IP: {ip}<br/></p>
      <Spacer height="50px"/>
      <Button href={`/app/studio/${id}`} variant="contained" color="primary" size="large">
        <span className={s.ctabutton}>Proceed</span>
      </Button>
    </div>
  );
};

export default Server;
