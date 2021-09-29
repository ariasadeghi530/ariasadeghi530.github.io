import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';


const useStyles = makeStyles((theme) => ({

  heroContent: {
    position: 'relative',
    display: 'table',
    backgroundColor: '#F7F7F7',
    paddingLeft: 0,
    paddingRight: 0,
    width: '100%',
    height: '50%',
    paddingBottom: '8%',
    paddingTop: '10%',
    // marginBottom: 10,
    overflowX: 'hidden',
    backgroundSize: "cover"
  },
 
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  logo:{
    width: "55px",
    height: '55px'
  }
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
       I'm a software engineer based in Laguna Hills, CA.
     </Typography>
     <Typography variant="h6" align="center" color="textSecondary" paragraph>
       I find clean and logical solutions to complex problems. Learn more about me and see some of the work I've done below.
     </Typography>
     <div className={classes.heroButtons}>
       <Grid container spacing={3} justify="center">
         <Grid item>
           <IconButton href='https://github.com/ariasadeghi530' target="_blank" >
             <img src='/images/product_5.png' alt="github-logo" className={classes.logo}/>
           </IconButton>
         </Grid>
         <Grid item>
           <IconButton href='https://www.linkedin.com/in/ariasadeghi/' target="_blank"  >
           <img src='/images/linkedIn.png' alt="linked-logo" className={classes.logo}/>
           </IconButton>
           
         </Grid>
         <Grid item>
           <IconButton href="https://drive.google.com/file/d/18y--fU6dOd83SYGQb4HdMkwiJWMlXXXo/view?usp=sharing" target="_blank" >
             <img src="/images/resumeLogo.png" alt="resume-logo" className={classes.logo}/>
           </IconButton>
         </Grid>
          
       </Grid>
       
     </div>
   </Container>
   
 </div>
    )
    
    }