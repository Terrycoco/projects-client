import React, {Component} from 'react';
import { connect } from 'react-redux';
import FlexFrame from 'components/FlexFrame';
import Header from 'components/Header';
import {menuItems} from 'pages/routes';
import styles from './index.less';
import colors from 'styles/colors.less';
import flex from 'styles/flex.css';
import typeography from 'styles/typeography.less'; //so webpack will import


class App extends Component {
	render() {
		return (
    <FlexFrame flow="row wrap" minHeight="100%" minWidth="100%" alignItems="flex-start">
    	<Header flex="100%" minHeight="2em" menuItems={menuItems} />
    	{this.props.children}
		</FlexFrame>
		);
	}
}

function mapStateToProps(state) {
	return {
		browser: state.browser
	};
}


export default connect(mapStateToProps)(App);