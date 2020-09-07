import React from 'react'
import {
    Button,
    Grid,
    Box,
} from '@material-ui/core'
import Spacer from 'react-spacer'
import s from '../../styles/styles.module.css'
import UserContext from "../../UserContext";
import Logo from '../../assets/logo_white.svg'
import { Auth } from "aws-amplify";


class Account extends React.Component {
    static contextType = UserContext;
    render() {
      return (
        <>
         {/* {this.context.user.attributes.given_name}{" "}
         {this.context.user.attributes.family_name} */}
        </>
      )
    }
  }

  function signOut() {
    Auth.signOut()
      .then(() => {
        this.props.history.push("/login");
      })
      .catch(() => console.log("error signing out..."));
  }
export default function Shell(props) {
    return (
        <div>
            <Box minHeight="100vh">
                <Grid container alignItems="Center" justify="center">
                    <Grid item md={3} >
                        <Box bgcolor="primary.dark" minHeight="100vh">
                           {props.sidebar || 
                           <div style={{textAlign: 'left'}}>
                               <Box p={2}>
                               <Spacer height="10px"/>
                               <img src={Logo} style={{maxWidth: 150}}/>
                               <Account/>
                               <hr/>
                               {props.isAuthenticated ? (
                                <>
                                <div>
                                    This
                                </div>
                                </>
                               ) : ( 
                                   ''
                               )}
                               <Grid container alignItems="bottom" justify="right">
                                   <Button onClick={signOut} size="small" variant="contained" color="primary">
                                       Sign Out 
                                   </Button>
                               </Grid>
                               </Box>
                           </div>}
                        </Box>
                    </Grid>
                    <Grid item md={9}>
                       <Box height={1}>
                            {props.children}
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

