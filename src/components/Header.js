import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Avatar, Grid, Hidden, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Login from './Login'
import Register from './Register'
import { firebase } from '../firebase/firebaseConfig'
import { connect } from 'react-redux';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FilterFramesIcon from '@material-ui/icons/FilterFrames';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import ListIcon from '@material-ui/icons/List';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import CloseIcon from '@material-ui/icons/Close';
import HomeIcon from '@material-ui/icons/Home';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom : '6vH'
  },
  rootDraver: {
    display: 'flex',
  },
  toolbar: {
    minHeight: 128,
    alignItems: 'flex-start',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    fontSize: 45,
    fontFamily: 'Big Shoulders Stencil Text',
  },
  leftButtons: {
    marginTop: 25
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    backgroundColor: '#ff5722',
    color: '#0'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }
}));



function Header(props) {
  const { isAuth, user } = props
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const name = user.name || ''
  const surname = user.surname || ''

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleAuto = () => {
    setOpen(!open)
  }

  return (
    <div className={classes.root}>
      <CssBaseline />

      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <div className='container'>
          <Toolbar className={classes.toolbar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
              style={{marginTop : '15px'}}
            >
              <MenuIcon />
            </IconButton>
            
            <Grid container spacing={3}>
              <Grid onClick={() => { props.changePage(1) }} item xs={12} sm={9}>
                <Button component={Link} to='/' onClick={() => {document.documentElement.scrollTop = 10}} className={classes.title} style={{ color: '#FFFFFF'}}>
                  JobFinder.com
                </Button>
              </Grid>
            <Hidden xsDown>
            { isAuth === 0 && name!=='' && surname !=='' && <>
              <Grid style={{margin : 'auto'}} item sm={3}>
                <Avatar onClick={handleAuto} variant='rounded' style={{backgroundColor : 'white' , color : '#F9572F',cursor:'pointer'}}> {surname[0]}{name[0]} </Avatar>
              </Grid>
            </> }  
            </Hidden>
            </Grid>
          </Toolbar>
        </div>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          { isAuth === 0 && name!=='' && surname !=='' && <>
            <Grid style={{margin : 'auto'}} item sm={3}>
              <Avatar component={Link} to='/cv' variant='circle' style={{backgroundColor : '#F9572F' , color : 'white',cursor:'pointer'}}> {surname[0]}{name[0]} </Avatar>
            </Grid>
          </> }
          <IconButton style={{color : '#F9572F'}} onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {
            isAuth === 2 ? 
          <div onClick={() => handleDrawerClose()}>
            <Login />
            <Register />
          </div> : isAuth === 0 ?
          <>
            <ListItem component={Link} to='/cv' onClick={() => handleDrawerClose()} button >
              <ListItemIcon><AccountBoxIcon  /></ListItemIcon>
              <ListItemText primary='Mənim CV' />
            </ListItem>
            <ListItem component={Link} to='/update/profile' onClick={() => handleDrawerClose()} button >
              <ListItemIcon><EditIcon  /></ListItemIcon>
              <ListItemText primary='Profildə düzəliş et' />
            </ListItem>
          </>
          : null}  
          <ListItem component={Link} to='/vacancies/add' onClick={() => handleDrawerClose()} button >
            <ListItemIcon><AddIcon  /></ListItemIcon>
            <ListItemText primary='Vakansiya əlavə et' />
          </ListItem>
          {
            isAuth === 0 &&
            <>
              <ListItem component={Link} to='/' onClick={() => {firebase.auth().signOut() ; handleDrawerClose() } } button >
                <ListItemIcon><CloseIcon  /></ListItemIcon>
                <ListItemText primary='Çıxış et' />
              </ListItem>
            </>
          }   
        </List>
        <Divider />
        <List>
          <ListItem component={Link} to='/' onClick={() => handleDrawerClose()} button >
            <ListItemIcon> <HomeIcon/> </ListItemIcon>
            <ListItemText primary='Ana Səhifə' />
          </ListItem>
          <ListItem component={Link} to='/vacancies' onClick={() => handleDrawerClose()} button >
            <ListItemIcon><ListIcon  /></ListItemIcon>
            <ListItemText primary='Bütün vakansiyalar' />
          </ListItem>
          <ListItem component={Link} to='/users' onClick={() => handleDrawerClose()} button >
            <ListItemIcon><AssignmentIcon  /></ListItemIcon>
            <ListItemText primary="Bütün CV'lər" />
          </ListItem>
          <ListItem component={Link} to='/rules' onClick={() => handleDrawerClose()} button >
            <ListItemIcon><FilterFramesIcon  /></ListItemIcon>
            <ListItemText primary="Qaydalar" />
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />

      </main>
    </div>
  );
}

const mapStatetoProps = (state) => ({
  isAuth: state.isAuthReducer,
  user : state.authReducer
})
const mapDispatchtoProps = (dispatch) => {
  return {
    changePage: (number) => dispatch({
      type: 'CHANGE_PAGE',
      number
    })
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Header)
