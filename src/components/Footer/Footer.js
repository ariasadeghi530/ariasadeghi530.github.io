import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
        Aria Sadeghi
      {' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}
const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
    <Typography variant="h6" align="center" gutterBottom>
    <Link color="inherit" href="mailto:ariasadeghi@gmail.com"> 
      Contact Me
      </Link>
      
    </Typography>
    <Typography  align="center" color="textSecondary" paragraph>
    I am actively seeking employment opportunities.
     </Typography>
    <Copyright />
  </footer>
  )
}