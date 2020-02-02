import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Grid,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Bio from './components/Bio';
import Avatar from './components/Avatar'

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#AD3939',
      light: '#F05743'
    },
    secondary: {
      light: '#222629',
      main: '#1F2022',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
  },
});

const styles = makeStyles(({palette}) => {
  console.log("Xavi  ~ :) : ppp", palette)

  return {
    avatar: {
      display : 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 30,
      paddingTop: 30
    },
    avatarName: {
      fontWeight: 800,
    },
    avatarJob: {
      
    },
    avatarContainer: {
      background: '#1F2022'
    },
    bioContainer: {
      background: '#AD3939'
    }
  }
});



function App() {
  const classes = styles();
  console.log("Xavi  ~ :) : App -> theme", theme)
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <main>
          <Grid container>
            <Grid item xs={4} className={classes.avatarContainer}>
              <div className={classes.avatar}>
              <Avatar />
              <Typography
                className={classes.avatarName}
                variant="h4"
                gutterBottom
                component="h1">
                  XAVIER GONZALEZ
                </Typography>
              <Typography
                className={classes.avatarJob}
                variant='h6'>
                FrontEnd Developer
              </Typography>
              </div>
            </Grid>
          <Grid item xs={8} className={classes.bioContainer}>
            <Bio />
          </Grid>
          </Grid>
        </main>
    </ThemeProvider>
  );
}

export default App
