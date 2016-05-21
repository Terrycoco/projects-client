import React, {Component} from 'react';
import FlexFrame from 'components/FlexFrame';
import styles from './index.less'; 
import Example from 'components/example-responsive';
import Main from 'components/Main';


class Home extends Component {
	render() {
		return (
      <FlexFrame {...this.props}>
      	<Main />
      </FlexFrame>
			);
	}
}

export default Home
;