import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => {

  return {
    imageContainer: {
      position: 'relative',
      maxWidth: 300,
      width: '100%',
      height: 350
      // border: 'solid 2px red'
    },
    hexagonIn: {
      '& *': {
        position: 'absolute',
        visibility: 'visible',
        outline: '1px solid transparent'
      },
      position: 'absolute',
      width: '96%',
      paddingBottom: '110.851%', /* =  width / sin(60) */
      margin: '2%',
      overflow: 'hidden',
      visibility: 'hidden',
      outline: '1px solid transparent', /* fix for jagged edges in FF on hover transition */
      transition: 'all 0.5s',
    },
    hexagonLink: {
      display: 'block',
      width: '100%',
      height: '100%',
      textAlign: 'center',
      color: '#fff',
      overflow: 'hidden',
      background: 'linear-gradient(blue, red)',
      padding: '-1%',
      '-webkit-clip-path':' polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      'clip-path': 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
    },
    hexagonImg: {
      '&:before, &:after': {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        content: '',
        opacity: 0,
        transition: 'opacity 0.5s',
      },
      '&:before': {
        background: 'rgba(22, 103, 137, 0.3)'
      },
      '&:after': {
        background: 'linear-gradient(to top, transparent, rgba(0, 0, 0, 0.5), transparent)'
      },
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      backgroundPosition: 'center center',
      backgroundSize: 'cover',
      overflow: 'hidden',
      // '-webkit-clip-path': 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      'clip-path': 'polygon(50% 4%, 98% 25%, 98% 75%, 50% 96%, 2% 75%, 2% 25%)',
      width: 'auto',
      height: '100%',
      margin: '0 auto',
    }
}
});