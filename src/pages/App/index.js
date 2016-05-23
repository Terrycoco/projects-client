import React, {Component} from 'react';
import { connect } from 'react-redux';
import FlexFrame from 'components/FlexFrame';
import Header from 'components/Header';
import {menuItems} from 'pages/routes';
import styles from './index.less';

//so webpack will process
import colors from 'styles/colors.less';
import typeography from 'styles/typeography.less'; 

class App extends Component {

	render() {
		return (
     <div>
	    <Header     minWidth="100%" 
	    						minHeight="3em" 
	    						menuItems={menuItems} 
	    						position="fixed" 
	    						zIndex="100"
	    						activeRoute={this.props.activeRoute} />

	    <FlexFrame 	position="relative" 
      						top="3em" 
      						height="98%" 
      						minWidth="100%" 
      						flow="row wrap" 
      						alignItems="flex-start" 
      						justifyItems="flex-start"
      						overflow="scroll">

	    	{this.props.children}
			
			</FlexFrame>
		</div>

		);
	}
}

function mapStateToProps(state, ownProps) {
	// console.log('appOwnProps:', ownProps);
	return {
		browser: state.browser,
		activeRoute: ownProps.location.pathname
	};
}



export default connect(mapStateToProps)(App);