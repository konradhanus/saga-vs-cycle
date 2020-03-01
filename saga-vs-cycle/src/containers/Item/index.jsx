import React from 'react';
import { connect } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import SyncIcon from '@material-ui/icons/Sync';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(1)
	}
}));

const classItem = {
	width: '200px'
};

const classItemRotate = {
  ...classItem,
  animation: 'App-logo-spin infinite 0.5s linear'
}

const Item = ({children, name, status}) => {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-around' }}>
			<div style={classItem}>{children}</div>
			<div style={classItem}>{name}</div>
			{status === 1 ?
			<div style={classItem}></div>:
			status === 2 ? 
			<div style={classItemRotate}>
				<SyncIcon />
			</div>:
			<div style={classItem}>
				<CheckCircleIcon />
			</div>}
		</div>
	);
};

const mapStateToProps = (state) => ({
	cart: state.cart
});

export default connect(mapStateToProps)(Item);
