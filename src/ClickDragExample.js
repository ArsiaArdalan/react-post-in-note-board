import clickdrag from 'react-clickdrag';
import React, { Component } from 'react';

class ExampleComponent extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			lastPositionX: 0,
			lastPositionY: 0,
			currentX: 0,
			currentY: 0
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.dataDrag.isMoving) {
			this.setState({
				currentX: this.state.lastPositionX + nextProps.dataDrag.moveDeltaX,
				currentY: this.state.lastPositionY + nextProps.dataDrag.moveDeltaY
			});
		} else {
			this.setState({
				lastPositionX: this.state.currentX,
				lastPositionY: this.state.currentY
			});
		}
	}

	render() {
		var translation = 'translate(' + this.state.currentX + 'px, ' + this.state.currentY + 'px)';

		return React.createElement('div', {
			style: { width: '200px', height: '200px', backgroundColor: 'red', transform: translation }
		});
	}
}

var ClickDragExample = clickdrag(ExampleComponent, { touch: true });

export default ClickDragExample;
