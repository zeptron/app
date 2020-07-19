import React from 'react'
import {Box, Grid} from '@material-ui/core'
import Spacer from 'react-spacer'
import s from '../styles/styles.module.css'
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }));
  

export default function Faq(){

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            <Box bgcolor="primary.dark" color="primary.contrastText" p={4} >
            <Spacer height="10px"/>
            <Grid container alignItems="center" justify="center">
                <Grid item md={8} xs={12}>
                <h1  className={`${s.header} ${s.center}`}>Frequently Asked Questions</h1>
                </Grid>
            </Grid>
            </Box>
            <Box>
                <Grid container alignItems="center" justify="center">
                    <Grid item md={8} xs={12}>

               
                <Spacer height="50px"/>

                <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>What do you do with data?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our video streaming service is encrypted and allows you to send your data directly to your model instance. 
            When your model is running, inferred results are written directly to your unique model database. 
            <br/> <br/>We pipe data securely from endpoint to endpoint throughout the process to eliminate risk of exposure.
            <br/> <br/>The only details we keep are your model configuration, so that you may start / run the model again, 
            and the results of inference which are stored in a secure table so that you may access your analytics at any time.
            <br/> <br/>If you have configured actions such as notifications, we'll store a screen shot of the detection and deliver your notification to whichever endpoints you provide. Default endpoints are email, SMS and Slack.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>What privacy controls do you have in place?</Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          We have intentionally built privacy-conscious features into Zeptron.
            <p>
                    every model is isolated so there is no risk of your data mixing with another user's
                    </p>
                    <p>
                    by default, video footage is kept on ephemeral storage and is destroyed after inference
                    </p>
                    <p>
                    if you wish to keep your footage, we suggest you use our one-click install for your own AWS resources. Please <a href="contact">contact us</a>
                    </p>
                    <p>
                    Zeptron employees do not have the necessary privileges to access your data without you giving a Director written consent
                    </p>
                    <p>
                    we do not offer models through the library that provide facial recognition
                    </p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>How does billing work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Model run time is recorded per minute. On our hourly plan, you are billed on a cost per hour basis. On our monthly plan, you get unlimited usage. We bill on the 14th of every month through credit card or invoice.
          <br/><br/>
          Want to pay less? Install Zeptron on your own AWS resources and pay your cloud provider directly for GPU costs.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>How do I create an account for my organisation?</Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            At this time, Zeptron only provides single-user accounts. If you want an account for your organisation, we suggest you <a href="/contact">contact us</a> 
            &nbsp;about an organisational install. This allows you to provision the entire Zeptron application on your own AWS resources with one click and manage users yourself.          
            </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Can I use my own AWS resources?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes! For heavy users, we encourage you to use our one-click install on your own AWS resources. <a href="/contact">Contact us</a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>How do I connect a camera?</Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We provide extensive documentation at our <a href="https://zeptron.github.io/">Help Center</a> on connecting cameras. You can bring your own camera or use one of ours which provide free streaming to the cloud with 20ms of latency.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Can I bring my own model?</Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes! You are welcome to bring your own models. <a href="/contact">Get in touch with us</a> and we'll have it in your library in about 20 minutes.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>I need new features. What can I do?</Typography>
         
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            If you have a suggestion for a feature that everyone will like, we are likely to build it free of charge. Please <a href="/contact">get in touch with us</a>. 
            If you have a feature that you want to isolate to your account, we can do that too. Our platform is very adaptable.
          </Typography>
        </AccordionDetails>
      </Accordion>
     

    </div>
                </Grid>
                </Grid>
                <Spacer height="50px"/>
            </Box>

        </div>
    )
}