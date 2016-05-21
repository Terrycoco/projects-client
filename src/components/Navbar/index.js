import React, {Component} from 'react';
import FlexFrame from 'components/FlexFrame';
import {Link} from 'react-router';
import styles from './index.less';
import {connect} from 'react-redux';

class Navbar extends Component {
  renderItems() {
    return this.props.menuItems.map((item) => {
      return <Link key={item.route} to={item.route} >{item.title}</Link>
    });
  }
  render() {
    const {browser} = this.props;
    return (
      <FlexFrame {...this.props} element="nav" justifyItems={ browser.lessThan.medium ? "center" : "flex-end"} className={styles.nav}>
          {this.renderItems()}
      </FlexFrame>
    );
  }
}

function mapStateToProps(state) {
  return {
    browser: state.browser
  }
}

export default connect(mapStateToProps)(Navbar);