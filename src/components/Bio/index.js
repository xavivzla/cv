import React from 'react'

import {
  Typography
} from '@material-ui/core'

import {
  PhoneAndroid as PhoneAndroidIcon,
  LocationOn as LocationOnIcon,
  Mail as MailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon
} from '@material-ui/icons/'


import useStyles from './style'



const Bio = () => {
  const classes = useStyles()

  return (
    <div className={classes.wrapper}>
      <div>
        <Typography 
          variant="h4"
          component="h1"
          gutterBottom
        className={classes.title}>CONTACTME</Typography>

        <ul className={classes.list}>
          <li className={classes.listItem}>
            <a href='tel:+51959496201'>
              <span className={classes.icon}>
                <PhoneAndroidIcon />
              </span>
              <Typography variant="subtitle2">
                +51 959 469 201
              </Typography>
              </a>
            </li>
          <li className={classes.listItem}>
            <span className={classes.icon}>
              <LocationOnIcon />
            </span>
              <Typography variant="subtitle2">
                Lima, Peru
              </Typography>
          </li>
          <li className={classes.listItem}>
            <a href='mailto:xavivzla.g@gmail.com'>
              <span className={classes.icon}>
                <MailIcon />
              </span>
              <Typography variant="subtitle2">
                xavivzla.g@gmail.com
              </Typography>
            </a>
          </li>
          <li className={classes.listItem}>
            <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/xavier-gonzalez-8202aa3a/'>
              <span className={classes.icon}>
                <LinkedInIcon />
              </span>
              <Typography variant="subtitle2">
                xavier-gonzalez-8202aa3a
              </Typography>
            </a>
          </li>
          <li className={classes.listItem}>
            <a target='_blank' rel="noopener noreferrer" href='https://github.com/xavivzla'>
              <span className={classes.icon}>
                <GitHubIcon />
              </span>
              <Typography variant="subtitle2">
                xavivzla
              </Typography>
            </a>
          </li>
        </ul>
      </div>

      <div>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          className={classes.title}>ABOUTME</Typography>
        <Typography variant="h6" className={classes.paragraph}>
          Hi, I hope you're okay, my name is Edgardo and I am a frontend developer 
           born in Venezuela but living in Peru, with solid Javascript knowledge 
           using React as framework, a bit of mongo db and node.
        </Typography>
      </div>
    </div>
  )
}

export default Bio