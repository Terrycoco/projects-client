import React, {Component, PropTypes} from 'react';
import FlexFrame from 'components/FlexFrame';
import {Link } from 'react-router';
import styles from './index.less';
import {connect} from 'react-redux';


class Navlink extends Component {
  render () {
    const {item} = this.props;
    let isActive = (this.props.activeRoute === item.route);
    return (
          <Link className={isActive ? styles.active : ""} key={item.route} to={item.route}>
          {item.title}</Link>
    );
  }
}

Navlink.propTypes = {
  activeRoute: React.PropTypes.string.isRequired
};

class Navbar extends Component {
  renderItems() {
    return this.props.menuItems.map((item) => {
      return <Navlink item={item} key={'n'+ item.route} activeRoute={this.props.activeRoute} />
    });
  }
  render() {
    const {browser} = this.props;
    return (
      <FlexFrame {...this.props}
            id="navbar"
            element="nav"
            justifyItems={browser.lessThan.medium ? 'center' : 'flex-end'}
            alignItems="flex-end"
            className={styles.nav}>
        {this.renderItems()}
      </FlexFrame>
    );
  }
}

Navbar.propTypes = {
  activeRoute: React.PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    browser: state.browser
  }
}

export default connect(mapStateToProps)(Navbar);