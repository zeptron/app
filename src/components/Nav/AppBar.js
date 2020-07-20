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
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AppsIcon from '@material-ui/icons/Apps';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import Logo from '../../assets/logo_white.svg'

const useStyles = makeStyles({
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
  const [menuItems, setMenuItems] = React.useState([]);

  const AuthItems = [{
    name : "Studio",
    route: "/studio",
    icon: <DashboardIcon style={{color: "#fff"}}/>
  },{
    name : "Library",
    route: "/library",
    icon: <DynamicFeedIcon style={{color: "#fff"}}/>
  },{
    name : "Account",
    route: "/account",
    icon: <AccountBoxIcon style={{color: "#fff"}}/>
  },{
    name : "Billing",
    route: "/billing",
    icon: <AccountBalanceIcon style={{color: "#fff"}}/>
  },{
    name : "Help",
    route: "https://zeptron.github.io",
    icon: <HelpOutlineIcon style={{color: "#fff"}}/>
  }
]

  const items = [{
    name : "About",
    route: "/about",
    icon: ''
  },
  // {
  //   name :"",
  //   route: "/faq",
  //   icon: ""
  // },
  // {
  //   name : "Contact",
  //   route: "/contact",
  //   icon: ""
  // },
  {
    name : "Login",
    route: "/auth",
    icon: ''
  }]

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
            <ListItem key={val.name} className= {clsx(classes.listMenu)}>
              <Button
                  href={`${val.route}`}
                  className= {clsx(classes.menuOptions)}
                  style= {getActiveTab(val.name)}
                >
                  {val.name}
                </Button>
            </ListItem>
          ))}
          </List>
          </div>
      )
    } else {
      return (
        <div>
          <Button onClick={toggleDrawer(anchor, true)}><span style={{color: '#fff'}}><AppsIcon/></span></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            classes={{ paper: classes.paper }}
            style={{backgroundColor: 'rgb(37, 51, 55)'}}
          >
            <div style={{textAlign: 'left', margin: '20px 20px'}}>
              <Link to="/"><img src={Logo} style={{maxWidth: '50%'}} /></Link>
            </div>
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