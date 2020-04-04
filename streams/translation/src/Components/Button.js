import React from 'react';
import LanguageContext from '../context/LanguageContext';

class Button extends React.Component {
	//static contextType = LanguageContext; // static adds property to class itself only for using this.context

	render() {
		const text = this.context === 'english' ? 'Submit' : 'Valider';
		return <button className="ui button primary">{text}</button>;
	}
}

export default Button;
