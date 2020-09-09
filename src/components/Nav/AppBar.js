import React, {useEffect} from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation, Link } from 'react-router-dom';
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import AppsIcon from '@material-ui/icons/Apps';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Logo from '../../assets/logo_white.svg'
import { Auth } from "aws-amplify";
import UserContext from "../../UserContext";
import s from "../../styles/styles.module.css";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Spacer from 'react-spacer'
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  list: {
    width: 250,
    textTransform: 'uppercase'
  },
  fullList: {
    width: "auto"
  },
  menuOptions: {
    fontSize: "14px",
    fontWeight: 700,
    letterSpacing: "1px"  
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  },
  listMenu: {
    paddingLeft: "5px",
    paddingRight: "5px"
  },
  paper: {
    background: "rgb(37, 51, 55)",
    color: "#fff",
    marginRight: theme.spacing(2),
  }
}));


export default function SwipeableTemporaryDrawer(props) {
  const classes = useStyles();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [state, setState] = React.useState({
    right: false
  });
  const [isMobile, setIsMobile] = React.useState(false);
  const [routeLoction, setRouteLoction] = React.useState('');
  const [menuItems, setMenuItems] = React.useState([]);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const AuthItems = [
  {
    name : "Studio",
    route: "/app/studio",
    icon: <DashboardIcon style={{color: "#fff"}}/>
  }
  ,{
    name : "Library",
    route: "/library",
    icon: <DynamicFeedIcon style={{color: "#fff"}}/>
  },
  // {
  //   name : "Account",
  //   route: "/account",
  //   icon: <AccountBoxIcon style={{color: "#fff"}}/>
  // },
  // {
  //   name : "Help",
  //   route: "https://zeptron.github.io",
  //   icon: <HelpOutlineIcon style={{color: "#fff"}}/>
  // }
]

  const items = [
  {
    name : "Login",
    route: "/login",
    icon: <ExitToAppIcon style={{color: 'white'}}/>
  }
]

  useEffect(() => {
    if(window.innerWidth <= 720){
      setIsMobile(true)
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let currentPath = location.pathname;
    setRouteLoction(currentPath)
  }, [location]);

  useEffect(()=>{
    if(props.isAuthenticated){
      setMenuItems(AuthItems)
    } else {
      setMenuItems(items)
    }
  },[props.isAuthenticated])

  const getActiveTab = (checkTabText) => {
    let selectedItem = menuItems.filter(item => {
      return item.name === checkTabText;
    });
    if(selectedItem && selectedItem[0].route === routeLoction){
      return {color : "#26a7be"}
    } else {
      return {color : "#26a7be"}
    }
  }

  const handleResize = (value) => {
    if(window.innerWidth <= 720){
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }
  }


  const toggleDrawer = (anchor, open) => event => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menuItems.map((val, index) => (
          <ListItem button component="a" href={`${val.route}`} key={val.name}>
            <ListItemIcon>
              {val.icon}
            </ListItemIcon>
            <ListItemText primary={val.name}/>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  const getMenu = (anchor) =>{
    if(!isMobile){
      return(
        <div>
        <List className= {clsx(classes.flexContainer)} >
            {menuItems.map((val, index) => (
            <ListItem key={val.name} className={clsx(classes.listMenu)}>
              {/* <div>
        <Button
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          className= {clsx(classes.menuOptions)}
          style= {getActiveTab(val.name)}
        >
          Product
        </Button>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem onClick={handleClose}>AI App</MenuItem>
                    <MenuItem onClick={handleClose}>CCTV Connection</MenuItem>
                    <MenuItem onClick={handleClose}>4K AI Camera</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div> */}
              <Button
                  href={`${val.route}`}
                  className= {clsx(classes.menuOptions)}
                  style= {getActiveTab(val.name)}
                >
                  {val.name}
                </Button>
              
            </ListItem>
            
          ))}
          {props.isAuthenticated ? (
          <div>
          <ListItem button component="a"  className={clsx(classes.listMenu)} >
          <Button
           onClick={signOut}
           className= {clsx(classes.menuOptions)}
           style={{color: '#fff', fontWeight: 700}}
           >LOGOUT
           </Button>
          </ListItem>
          </div>
          ) : ( '' )
            }
          </List>
          </div>
      )
    } else {
      return (
        <div>
          <Button onClick={toggleDrawer(anchor, true)}><span ><AppsIcon/></span></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            classes={{ paper: classes.paper }}
            style={{backgroundColor: 'rgb(37, 51, 55)'}}
          >
            <div style={{textAlign: 'left', margin: '20px 20px'}}>
              <Link to="/"><img alt="Zeptron logo" src={Logo} style={{maxWidth: '50%'}} /></Link>
              {props.isAuthenticated ? (
              <div>
              <Spacer height="25px"/>
              <Account/>
              </div>
              ) : (
                ''
              )
              }
            </div>
            {list(anchor)}
            {props.isAuthenticated ? (
            <ListItem button component="a" onClick={signOut} >
            <ListItemIcon>
            <ExitToAppIcon style={{color: '#fff'}}/>
            </ListItemIcon>
            <ListItemText>
              LOGOUT
            </ListItemText>
          </ListItem>
            ) : (
              ''
            )
            }
          </SwipeableDrawer>
        </div>)
    }
  }

  return (
    <div>
      {["right"].map(anchor => (
        <React.Fragment key={anchor}>
          {getMenu(anchor)}
        </React.Fragment>
      ))}
    </div>
  );
}

function signOut() {
  Auth.signOut()
    .then(() => {
      this.props.history.push("/login");
    })
    .catch(() => console.log("error signing out..."));
}


class Account extends React.Component {
  static contextType = UserContext;
  render() {
    return (
      <div>
         <h3>
          {this.context.user.attributes.given_name}{" "}
          {this.context.user.attributes.family_name}
        </h3>
      </div>
    )
  }
}