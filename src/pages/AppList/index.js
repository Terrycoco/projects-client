import React, {Component} from 'react';
import { connect } from 'react-redux';
import FlexFrame from 'components/FlexFrame';
import styles from './index.css';
import Example from 'components/example-responsive';
import Main from 'components/Main';

class AppsPage extends Component {
	render() {
		return (
			<FlexFrame {...this.props} >
        <div>Box 1</div>
        <div>Box 2</div>
        <div>Box 3</div>
        <div>Box 4</div>
       </FlexFrame>
		);
	}
}
function mapStateToProps(state, ownProps) {
	console.log('appsOwnProps:', ownProps);
	return {
		route: ownProps.location.pathname
	};
}

export default connect(mapStateToProps)(AppsPage);