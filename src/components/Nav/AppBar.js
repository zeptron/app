import React, {useEffect} from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from 'react-router-dom';
import Toolbar from "@material-ui/core/Toolbar";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from '@material-ui/icons/Dashboard';
import VideocamIcon from '@material-ui/icons/Videocam';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AppsIcon from '@material-ui/icons/Apps';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';

const useStyles = makeStyles({
  list: {
    width: 250
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
  }
});

export default function SwipeableTemporaryDrawer(props) {
  const classes = useStyles();
  const location = useLocation();
  const [state, setState] = React.useState({
    right: false
  });
  const [isMobile, setIsMobile] = React.useState(false);
  const [routeLoction, setRouteLoction] = React.useState('');

  useEffect(() => {
    if(window.innerWidth <= 720){
      setIsMobile(true)
    }
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let currentPath = location.pathname;
    currentPath = currentPath.split("/")
    currentPath = currentPath[1]
    setRouteLoction(currentPath)
  }, [location]);

  const getActiveTab = (checkTabText) => {
    if(checkTabText === routeLoction){
      return {color : "#f57f17"}
    } else {
      return {color : "#ffffff"}
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
        {["Studio", "Library"].map((text, index) => (
          <ListItem button component="a" href={`/${text.toLowerCase()}`} key={text}>
            <ListItemIcon>
            {index === 0 && <DashboardIcon/>}
            {index === 1 && <DynamicFeedIcon/>}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Account", "Billing"].map((text, index) => (
          <ListItem button component="a" href={`/${text.toLowerCase()}`} key={text}>
           <ListItemIcon>
            {index === 0 && <AccountBoxIcon/>}
            {index === 1 && <AccountBalanceIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
      
          <ListItem button component="a" href="https://zeptron.github.io" >
           <ListItemIcon>
             <HelpOutlineIcon/>
            </ListItemIcon>
            <ListItemText>
              Help
              </ListItemText>
          </ListItem>
      </List>
    </div>
  );

  const getMenu = (anchor) =>{
    if(!isMobile){
      return(
        <List className= {clsx(classes.flexContainer)}>
            {["Studio", "Library","Account", "Billing"].map((text, index) => (
            <ListItem key={text} className= {clsx(classes.listMenu)}>
              <Button
                  href={`/${text.toLowerCase()}`}
                  className= {clsx(classes.menuOptions)}
                  style= {getActiveTab(text.toLowerCase())}
                >
                  {text}
                </Button>
            </ListItem>
          ))}
          <ListItem className= {clsx(classes.listMenu)}>
              <Button
                  href="https://zeptron.github.io"
                  className= {clsx(classes.menuOptions)}
                  style= {{color: "#ffffff"}}
                >
                  Help
                </Button>
            </ListItem>
          </List>
      )
    } else {
      return (
        <div>
          <Button onClick={toggleDrawer(anchor, true)}><span style={{color: 'white'}}><AppsIcon/></span></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
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