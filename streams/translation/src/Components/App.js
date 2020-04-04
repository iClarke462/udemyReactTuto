import React from 'react';
import LanguageContext from '../context/LanguageContext';
import UserCreate from '../Components/UserCreate';

class App extends React.Component {
	state = { language: 'english' };

	onLanguageChange = (language) => {
		this.setState({ language: language });
		//this.setState({ language });// Equivalent
	};
	render() {
		return (
			<div className="ui container">
				<div>
					Select a Language
					<i className="flag us" onClick={() => this.onLanguageChange('english')} />
					<i className="flag fr" onClick={() => this.onLanguageChange('french')} />
				</div>
				<LanguageContext.Provider value={this.state.language}>
					<UserCreate />
				</LanguageContext.Provider>
				<LanguageContext.Provider value="french">
					<UserCreate />
				</LanguageContext.Provider>
				<UserCreate />
			</div>
		);
	}
}

export default App;
