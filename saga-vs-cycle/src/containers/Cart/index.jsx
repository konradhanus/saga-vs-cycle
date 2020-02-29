import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

const Cart = (props) => {
    const classes = useStyles();
console.log(props.cart)
return (<Button
    variant="contained"
    color="primary"
    className={classes.button}
    endIcon={<SendIcon />}
  >
    Send
  </Button>)};

const mapStateToProps = (state) => ({
    cart: state.cart
});

export default connect(
  mapStateToProps,
)(Cart)
