import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => {

  return {
    title: {
      fontWeight: 800,
      color: theme.palette.text.primary
    },
    paragraph: {

    },
    list: {

    },
    wrapper: {
      '& > div:first-child': {
        paddingRight: 50,
        maxWidth: 320,
        width: '100%'
      },
      '& > div:last-child': {
        paddingLeft: 50
      },
      display: 'flex',
      background: theme.palette.primary.main,
      color: theme.palette.text.primary,
      padding: 30
    },
    icon: {
      background: theme.palette.text.primary,
      display: 'inline-flex',
      borderRadius: '100%',
      padding: 10,
      width: 40,
      height: 40,
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.primary.light,
    },
    listItem: {
      '& > a': {
        textDecoration: 'none',
        color: 'inherit',
        display: 'flex',
        alignItems: 'center',
      },
      '&:last-child': {
        marginBottom: 0
      },
      '& span': {
        marginRight: 20
      },
      display: 'flex',
      alignItems: 'center',
      marginBottom: 20,
      listStyle: 'none',
    }
}
});