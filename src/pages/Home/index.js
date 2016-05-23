import React, {Component} from 'react';
import FlexFrame from 'components/FlexFrame';
import styles from './index.less'; 
import Example from 'components/example-responsive';
import Main from 'components/Main';
import { connect } from 'react-redux';

class Home extends Component {
	render() {
		return (
      <FlexFrame {...this.props} minWidth="100%" justifyItems="center" >
      	<Main />
      </FlexFrame>
			);
	}
}

function mapStateToProps(state, ownProps) {
	console.log('homeOwnProps:', ownProps);
	return {
		route: ownProps.location.pathname
	};
}

export default connect(mapStateToProps)(Home);