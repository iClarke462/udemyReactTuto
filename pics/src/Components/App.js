import React from 'react';
import unsplash from '../API/unsplash';
import ImageList from './ImageList';
import Searchbar from './Searchbar';

class App extends React.Component {
	state = { images: [] };
	onSearchSubmit = async term => {
		const response = await unsplash.get('/search/photos', {
			params: { query: term },
		});
		console.log(this);
		this.setState({ images: response.data.results });
	};

	render() {
		return (
			<div className="ui container" style={{ marginTop: '10px' }}>
				<Searchbar onSearchBarSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images} />
			</div>
		);
	}
}

export default App;
