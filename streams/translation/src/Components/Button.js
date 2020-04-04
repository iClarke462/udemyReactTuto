import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class Button extends React.Component {
	//static contextType = LanguageContext; // static adds property to class itself only for using this.context
	renderSubmit(value) {
		return value === 'english' ? 'Submit' : 'Valider';
	}
	renderButton(color) {
		return (
			<button className={`ui button ${color}`}>
				<LanguageContext.Consumer>{(value) => this.renderSubmit(value)}</LanguageContext.Consumer>
			</button>
		);
	}
	render() {
		//const text = this.context === 'english' ? 'Submit' : 'Valider';

		return <ColorContext.Consumer>{(color) => this.renderButton(color)}</ColorContext.Consumer>;
	}
}

export default Button;
