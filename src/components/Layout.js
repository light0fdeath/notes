import React from 'react';
import { makeStyles } from '@mui/styles';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { AddCircleOutlined, SubjectOutlined } from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import Avatar from '@mui/material/Avatar';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      background: '#f9f9f9',
      width: '100%',
      padding: theme.spacing(3),
      margin: theme.spacing(2),
    },

    drawer: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: 'flex',
    },
    active: {
      background: '#f4f4f4',
    },
    title: {
      padding: theme.spacing(4),
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      flexGrow: 1,
    },
    toolbar: theme.mixins.toolbar,
    avatar: {
      marginLeft: theme.spacing(2),
    },
  };
});

function Layout({ children }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color='secondary' />,
      path: '/',
    },
    {
      text: 'Create Notes',
      icon: <AddCircleOutlined color='secondary' />,
      path: '/create',
    },
  ];
  return (
    <div className={classes.root}>
      <AppBar
        position='fixed'
        className={classes.appBar}
        elevation={0}
        color='primary'
      >
        <Toolbar>
          <Typography align='center' className={classes.appBar}>
            Todays date is : {format(new Date(), 'do MMMM Y')}
          </Typography>
          <Typography>Bigyan</Typography>
          <Avatar src='/young-man.png' className={classes.avatar} />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        anchor='left'
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant='h5' className={classes.title}>
            Bigyan Notes
          </Typography>
        </div>

        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => navigate(item.path)}
              className={location.pathname != item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
