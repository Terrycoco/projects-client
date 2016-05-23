import React, {Component} from 'react';
import { connect } from 'react-redux';
import FlexFrame from 'components/FlexFrame';
import Navbar from 'components/Navbar';
import Logo from 'components/Logo';
import styles from './index.less';

class Header extends Component {

	render() {
		console.log('header:', this.props);
		const {browser} = this.props;
		return (
			<FlexFrame {...this.props } 
								element="header" 
								flow="row wrap" 
								justifyItems={browser.greaterThan.small ? 'space-between' : 'center'}>
      	<Logo 	flex = {browser.lessThan.medium ? '0 0 100%': '0 0 25%'}/>
      	<Navbar flex={browser.lessThan.medium ? '0 0 100%' : '1 1 0%'}
      					menuItems={this.props.menuItems} 
      					activeRoute={this.props.activeRoute} />
			</FlexFrame>
		);
	}
}


function mapStateToProps(state) {
	// console.log(state.browser);
	return {
		browser: state.browser
	};
}


export default connect(mapStateToProps)(Header);

