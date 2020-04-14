import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({

  heroContent: {
    position: 'relative',
    display: 'table',
    
    paddingLeft: 0,
    paddingRight: 0,
    width: '100%',
    height: '50%',
    paddingBottom: '10%',
    paddingTop: '10%',
    // marginBottom: 10,
    overflowX: 'hidden',
    backgroundSize: "cover"
  },
 
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));
export default function Album() {
  const classes = useStyles();

  return (
   <div className={classes.heroContent}>
   <Container maxWidth="sm">
     <Typography component="h1" variant="h2" align="center"  gutterBottom>
       Aria Sadeghi
     </Typography>
     <Typography variant="h5" align="center" color="textSecondary" paragraph>
       I'm a full stack developer, finding clean and logical solutions to complex problems.
     </Typography>
     <div className={classes.heroButtons}>
       <Grid container spacing={3} justify="center">
         <Grid item>
           <Button href='https://github.com/ariasadeghi530' target="_blank" variant="contained" color="inherit">
             Github
           </Button>
         </Grid>
         <Grid item>
           <Button href='https://www.linkedin.com/in/ariasadeghi/' target="_blank"  variant="contained" color="inherit">
             LinkedIn
           </Button>
           
         </Grid>
         <Grid item>
           <Button href="https://drive.google.com/file/d/18y--fU6dOd83SYGQb4HdMkwiJWMlXXXo/view?usp=sharing" target="_blank" variant="contained" color="inherit">
             Resume
           </Button>
         </Grid>
          
       </Grid>
       
     </div>
   </Container>
   
 </div>
    )
    
    }