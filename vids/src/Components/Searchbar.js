import React from 'react';

class Searchbar extends React.Component {
	state = { searchTerm: 'Buildings' };

	OnInputChange = event => {
		this.setState({ searchTerm: event.target.value });
	};

	OnFormSubmit = event => {
		event.preventDefault();
		this.props.onFormSubmit(this.state.searchTerm);
	};

	render() {
		return (
			<div className="search-bar ui segment">
				<form onSubmit={this.OnFormSubmit} className="ui form">
					<div className="field">
						<label>Video search </label>
						<input type="text" value={this.state.searchTerm} onChange={this.OnInputChange} />
					</div>
				</form>
			</div>
		);
	}
}

export default Searchbar;
