import React, {Component} from 'react';
import { connect } from 'react-redux';
import FlexFrame from 'components/FlexFrame';
import Navbar from 'components/Navbar';
import Logo from 'components/Logo';
import styles from './index.less';


class Header extends Component {

	render() {
		return (
			<FlexFrame {...this.props } element="header" flow="row wrap"  >
      	<Logo flex="1" />
      	<Navbar flex="75%" menuItems={this.props.menuItems} />
			</FlexFrame>
		);
	}
}


function mapStateToProps(state) {
	return {
		browser: state.browser
	};
}


export default connect(mapStateToProps)(Header);

