import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';


const useStyles = makeStyles((theme) => ({

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
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
     <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
       Aria Sadeghi
     </Typography>
     <Typography variant="h5" align="center" color="textSecondary" paragraph>
       I am a full stack developer, finding efficient and clean solutions to complex problems.
     </Typography>
     <div className={classes.heroButtons}>
       <Grid container spacing={2} justify="center">
         <Grid item>
           <Button href='https://github.com/ariasadeghi530' target="_blank" variant="outlined" color="primary">
             Github
           </Button>
         </Grid>
         <Grid item>
           <Button href='https://www.linkedin.com/in/ariasadeghi/' target="_blank"  variant="outlined" color="primary">
             LinkedIn
           </Button>
         </Grid>
         <Grid item>
           <Button href="https://drive.google.com/file/d/18y--fU6dOd83SYGQb4HdMkwiJWMlXXXo/view?usp=sharing" target="_blank" variant="outlined" color="primary">
             Resume
           </Button>
         </Grid>
       </Grid>
     </div>
   </Container>
 </div>
    )
    
    }