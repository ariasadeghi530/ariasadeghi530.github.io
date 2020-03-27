import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';


const useStyles = makeStyles((theme) => ({
  nav :{
    background: '#00bcd4'
  },
  text: {
    color: ''
  },
}));

const primary = grey[600];
export default function Navbar() {
  const classes = useStyles();

  return (
<AppBar position="relative" className={classes.nav}>
<Toolbar>
  <Typography variant="h6" color="inherit" className={classes.text} noWrap>
    Aria Sadeghi
  </Typography>
</Toolbar>
</AppBar>
  )
}