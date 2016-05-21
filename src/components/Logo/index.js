import React, {Component } from 'react';
import FlexFrame from 'components/FlexFrame';
import styles from './index.less';

class Logo extends Component {
	render() {

	 return (
			<FlexFrame {...this.props} className={styles.logo} alignItems="center" justifyItems="center">
				<span className={styles.marr}>marr</span>
				<span className={styles.apps}>apps</span>
			</FlexFrame>
	);
	}
}

export default Logo;