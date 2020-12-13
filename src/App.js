import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Card from './components/Card';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {'Copyright © '}
      <Link color="inherit" href="https://armcbride.github.io" target='_blank'>
        Ruthless Designs
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
       <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="sm">
        
        <Typography variant="h2" component="h1" gutterBottom>
          Practice Page
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Practicing for React Spring animation techniques. '}
          {'I hope it is not too hard'}
        </Typography>
        <Typography variant="body1">Ruthless Designs</Typography>

        <Card></Card>

      </Container>


      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">It has been an interesting journey.</Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
    </div>
  );
}

export default App;
