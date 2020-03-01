import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';
import Item from '../Item';
import actionCreators from './action';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1)
	}
}));

const Cart = (props) => {
  const classes = useStyles();
  console.log(props.itemsList);
	return (
    <>
    {props.itemsList.map((item)=>(
      <Item name={item.name} status={item.status}>{item.icon}</Item>
      ))}
    <Button 
      variant="contained" 
      color="primary" 
      className={classes.button} 
      endIcon={<SendIcon />}
      onClick={()=>props.cartSendUsingSaga()}>
			Send
		</Button>
    </>
	);
};

const mapStateToProps = (state) => ({
	itemsList: state.cart
});

export default connect(mapStateToProps, actionCreators)(Cart);
