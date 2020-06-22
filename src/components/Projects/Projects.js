import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
    paddingBottom: '5%'
  },

  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  projectHeader: {
    marginTop: '5%',
    marginBottom: '5%'
  }
}));

const cards = [{ name: 'eFlow', description: "A mobile-responsive, full stack application, utilizing MySQL, Express, React-views, and Node. A local marketplace for users to buy, sell, and trade items with other users. Hand built user authentication and private messaging, password reset utilizing node mailer package, and using UI Kit styling library. Utilizes RESTful routes.", github: 'https://github.com/ariasadeghi530/eFlow-', deployed: 'https://frozen-atoll-04274.herokuapp.com/', image: './images/eFlowImg.png' },
{ name: 'Pin', description: "Pin, or the Project Idea Network, a MERN stack application allowing developers to share project ideas to add to their portfolios. Fully mobile-responsive and implements MaterialUI library.", github: 'https://github.com/ariasadeghi530/pin', deployed: 'https://still-mesa-24441.herokuapp.com/', image: './images/pinImg.png' },
{ name: 'GitHoops', description: "A mobile-responsive web app with up-to-date NBA game, team, and player information, utilizing theSportsDB API, mySportsFeed API, ESPN API, and Google Maps API. Utilizes HTML, CSS, JavaScript, and Materialize's styling library.", github: 'https://github.com/ariasadeghi530/gitHoops', deployed: 'https://ariasadeghi530.github.io/gitHoops/', image: './images/gitHoopsImg.png' }, { name: 'Tree Traversal Visualizer', description: 'Web application to visualize traversing a Tree data structure. Utilizes React and Flask. July 2020.', image: 'http://www.ki-elements.no/wp-content/uploads/2017/07/coming-soon.jpg' }]

export default function Projects() {
  const classes = useStyles();
  return (
    <Container>
      <Typography variant="h5" align="center" color="textSecondary" className={classes.projectHeader}>
        My Work
      </Typography>
      <Grid container spacing={4}>

        {cards.map((card, index) => (
          <Grid item key={index} xs={12} sm={6} md={6}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={card.image}
                title={card.name}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.name}
                </Typography>
                <Typography>
                  {card.description}
                </Typography>
              </CardContent>
              <CardActions>
                {card.github ?
                  <Button href={card.github} target="_blank" size="small" color="primary">
                    Github Repo
          </Button> :
                  <>
                  </>
                }
                {card.deployed ?
                  <Button href={card.deployed} target="_blank" size="small" color="primary">
                    Deployed
          </Button> :
                  <>
                  </>
                }
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}