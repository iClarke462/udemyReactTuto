import React from 'react';

class LanguageSelector extends React.Component {
	render() {
		return (
			<div>
				Select a Language
				<i className="flag us" onClick={() => this.props.onLanguageChange('english')} />
				<i className="flag fr" onClick={() => this.props.onLanguageChange('french')} />
			</div>
		);
	}
}

export default LanguageSelector;
