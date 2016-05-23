import React, {Component} from 'react';
import autoprefix from 'react-prefixer';

function getChildStyles(props) {
//me as child position MYSELF
//can pass in flex, justifySelf, alignSelf, order
	let styles = {};

	//use defaults unless specified
	if (props.flex){
	 styles.flex = props.flex;
	}
	if (props.alignSelf) {
		styles.alignSelf = props.alignSelf;
	}
	if (props.order) styles.order = props.order;
	if (props.justifySelf) {
	  switch(props.justifySelf) {
	  	case "right": styles.marginLeft= 'auto';
	  	case "left": styles.marginRight='auto';
	  	case "top": styles.marginBottom="auto";
	  	case "bottom": styles.marginTop ="auto";
	  }
  }
	//respect any definite dimensions passed
	if (props.height) styles.height = props.height;
	if (props.minHeight) styles.minHeight = props.minHeight;
	if (props.minWidth) styles.minWidth = props.minWidth;
	if (props.width) styles.width = props.width;

	  //other positioning props we may pass to position self
  if (props.position) styles.position = props.position;
  if (props.top) styles.top = props.top;
  if (props.left) styles.left = props.left;
  if (props.bottom) styles.bottom = props.bottom;
  if (props.right) styles.right = props.right;
  if (props.zIndex) styles.zIndex = props.zIndex;
  if (props.overflow) styles.overflow = props.overflow;
	return autoprefix(styles);
}

function getParentStyles(props) {
	//me as parent
	//can pass in height, width, flow, justifyItems, alignItems
	//can change defaults here if you want
	let parentstyles = {
		display: 'flex'
  };
  if (props.inline === "yes") {
  	parentstyles.display= 'inline-flex';
  }
  if (props.flow) {
  	parentstyles.flexFlow = props.flow;
  }

	if (props.justifyItems) {
		parentstyles.justifyContent = props.justifyItems;
	}
	parentstyles.alignItems = props.alignItems || "stretch" ;  // for nowrap
	parentstyles.alignContent = props.alignItems || "stretch"; //for wrap
  
  let styles = autoprefix(parentstyles);
  let childstyles = getChildStyles(props);

  return Object.assign({}, childstyles, styles);

}



class FlexFrame extends Component {
	render() {
		if (this.props.id==='navbar') console.log('nav before:', this.props);
    
    const children = React.Children.map(this.props.children, (child) => {
    	const childstyles = getChildStyles(child.props);
    	return React.cloneElement(
    		child,
    		{style: childstyles}
    	);
    });



		const elem = this.props.element || 'div';
		const styles = getParentStyles(this.props);

		return React.createElement(
			elem,
			{style: styles, className: this.props.className},
			children
		);
	}


}

FlexFrame.propTypes = {
	element: React.PropTypes.string,
	flow: React.PropTypes.string,
	height: React.PropTypes.string,
	width: React.PropTypes.string,
	justifyItems: React.PropTypes.string,
	alignItems: React.PropTypes.string
};


export default FlexFrame;