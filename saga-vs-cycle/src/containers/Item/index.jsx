import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import SyncIcon from '@material-ui/icons/Sync';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

const Item = (props) => {
    const classes = useStyles();
console.log(props.cart)
return (<div style={{display: 'flex'}}>
    <div>
     {props.children}
     </div>
     <div> {props.name}</div>
     <div>
     <SyncIcon /></div></div>)};

const mapStateToProps = (state) => ({
    cart: state.cart
});

export default connect(
  mapStateToProps,
)(Item)
