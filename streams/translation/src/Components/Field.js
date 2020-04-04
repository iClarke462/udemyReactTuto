import React from 'react';
import { render } from '@testing-library/react';
import LanguageContext from '../context/LanguageContext';

class Field extends React.Component {
	static contextType = LanguageContext; // Crates link between class and context object
	render() {
		const name = this.context === 'english' ? 'Name' : 'Nom';
		return (
			<div className="ui field">
				<label>{name}</label>
				<input />
			</div>
		);
	}
}

export default Field;
