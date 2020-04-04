import React from 'react';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';
import UserCreate from '../Components/UserCreate';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
	state = { language: 'english', buttonColor: 'primary' };

	onLanguageChange = (language) => {
		this.setState({ language: language });
		this.setState({ buttonColor: language === 'english' ? 'primary' : 'red' });
		//this.setState({ language });// Equivalent
	};
	render() {
		return (
			<div className="ui container">
				<LanguageSelector onLanguageChange={this.onLanguageChange} />
				<LanguageContext.Provider value={this.state.language}>
					<ColorContext.Provider value={this.state.buttonColor}>
						<UserCreate />
					</ColorContext.Provider>
				</LanguageContext.Provider>
			</div>
		);
	}
}

export default App;
