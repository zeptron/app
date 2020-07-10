import React, { Component } from 'react';
import { render } from 'react-dom';
import s from '../../styles/styles.module.css'
import Cogs from '../animations/cogs'
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, Button } from '@material-ui/core'
import Spacer from 'react-spacer'
import Success from './Components/ProvisionHelper'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../graphql/queries';


class Provision extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      showHideProvision: false,
      showHideIP: false,
      showHideButton: true,
      count: 0,
      model: undefined,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.setState({ showHideProvision: false });
      this.setState({ showHideIP: true });
      this.setState({ showHideButton: false });
    }, 34000);

    this.fetchLibrarySingleModelAPI();
  }

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case 'showHideProvision':
        this.setState({ showHideProvision: !this.state.showHideProvision });
        break;
      case 'showHideIP':
        this.setState({ showHideIP: !this.state.showHideIP });
        break;
      case 'showHideButton':
        this.setState({ showHideButton: !this.state.showHideButton });
        break;

    }
  }

  async fetchLibrarySingleModelAPI() {
    try {
      const modelInfo = await API.graphql(
        graphqlOperation(queries.getModel, { id: this.props.match.params.id })
      );

      this.setState({model: modelInfo.data.getModel});
    } catch (err) {
      console.log('error: ', err);
    }
  }

  render() {
    console.log(this.state.model);
    const classes = makeStyles((theme) => ({
      root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
    }));

    const { showHideProvision, showHideIP, showHideButton } = this.state;

    return (
      <div>
        <Box bgcolor="primary.dark" color="primary.contrastText">
          <Spacer height="50px"/>
          <Grid container alignItems="center" justify="center">
            <Grid item md={8} sm={10} xs={12}>
              <h1 className={s.header}>{this.state.model?.name ?? '...'}</h1>
              <p className={s.subheader}>MODEL CONFIGURATION</p>
              <Spacer height="25px"/>
            </Grid>
          </Grid>
          <Spacer height="50px"/>
        </Box>

        <Box>

          <div className="devnotes">
            <h3>{'<'}DeveloperNotes{'>'}</h3>
            <p>Call the CloudFormation template and display public IP, private IP adress</p>
            <p>While stack creation in progress, show {'{<cogs/>}'} from src/app/animations/cogs.js </p>
            <p>Save public IP, private IP adress, ec2 instance ID in modelConfig table</p>
            <h3>{'</'}DeveloperNotes{'>'}</h3>
          </div>

          <Spacer height="50px"/>
          <Grid container alignItems="center" justify="center">
            <Grid item md={8} sm={10} xs={12}>

              {showHideButton &&
              <div>
                <Grid container alignItems="center" justify="center">


                  <Grid item xs={12}>
                    <FormControl component="fieldset">
                      <FormLabel component="legend">Instance Type</FormLabel>
                      <RadioGroup aria-label="type" name="type1">
                        <FormControlLabel value="live" control={<Radio/>} label="Live"/>
                        <FormControlLabel value="vile" control={<Radio/>} label="From File"/>
                      </RadioGroup>
                    </FormControl>
                  </Grid>

                  <Spacer height="50px"/>

                  <Grid item xs={12}>
                    <form className={classes.root} noValidate autoComplete="off">


                      {/* // this should only be required if File is checked */}


                      <TextField
                        required
                        id="outlined-required"
                        label="Public Amazon S3 Link"
                        // defaultValue="Public Amazon S3 Link"
                        variant="outlined"
                      />

                      {/* //  */}


                    </form>
                  </Grid>

                  <Spacer height="50px"/>

                  <Grid item xs={12}>
                    <Button variant="outlined" color="primary" size="large"
                            onClick={() => this.hideComponent('showHideProvision')}>
                      <span className={s.ctabutton}>Provision</span>
                    </Button>
                  </Grid>

                </Grid>

              </div>
              }
              <Spacer height="50px"/>
              <Grid container alignItems="center" justify="center">
                <Grid item sm={8} md={4}>
                  {showHideIP && <Success/>}
                </Grid>
              </Grid>
              <Grid container alignItems="center" justify="center">
                <Grid item sm={2} md={2}>
                  <div> {showHideProvision && <Cogs/>}
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Spacer height="50px"/>
      </div>
    );
  }
}

export default Provision
