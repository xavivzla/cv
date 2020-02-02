import React from 'react'

import useStyles from './style'

const Avatar = () => {
  const classes = useStyles()

  return (
    <div className={classes.imageContainer}>
      <div className={classes.hexagonIn}>
        <a className={classes.hexagonLink} href="#">
          <div className={classes.hexagonImg}
            style={{
              backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPei_ZWMWEFK_htWZ6tZem_38jgrRmnxxYzauXJKYOI8NAurTR&s)'
            }} />
        </a>
      </div>
    </div>
  )
}

export default Avatar