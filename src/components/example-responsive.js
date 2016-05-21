import React from 'react';
import {connect} from 'react-redux';
import FlexFrame from 'components/FlexFrame';


// grab only the responsive state from the store
// (assuming you have put the `responsiveStateReducer` under
//  the key `browser` in your state tree)
function browserSelector({browser}) {
    return {browser}
}

class MyComponent extends React.Component {
    render() {
        // grab the responsive state off of props
        const {browser} = this.props

        let message = `The viewport's current media type is: ${browser.mediaType}.`

        if (browser.lessThan.small) {
            message += 'Secret message for viewports smaller than than the "small" breakpoint!'
        } else if (browser.lessThan.medium) {
            message += 'Secret message for viewports between the "small" and "medium" breakpoints!'
        } else {
            message += 'Message for viewports greater than the "medium" breakpoint.'
        }

        return (
            <FlexFrame {...this.props} >
              {message}
            </FlexFrame>
        );
    }
}

function mapStateToProps(state) {
  console.log('browserstate:', state.browser);
  return {
    browser: state.browser
  };
}


export default connect(mapStateToProps)(MyComponent);