import React from 'react';
import ReactDOM from 'react-dom';
import Moment from 'moment';
import nasa from '../API/nasa';
import DatePicker from './DatePicker';
import ObjectList from './ObjectList';

class App extends React.Component {
	state = {
		NearEarthObjects: [],
		NearEarthObjectsCount: 0,
		IsButtonDisabled: false,
	};

	componentDidMount() {
		this.onButtonClick({ startDate: '2020-01-01', endDate: '2020-01-07' });
		this.updateDateSelection('2020-01-01', '2020-01-07');
	}
	onButtonClick = async SelectedDates => {
		const response = await nasa.get('/feed', {
			params: {
				start_date: SelectedDates.startDate,
				end_date: SelectedDates.endDate,
			},
		});

		this.setState({ NearEarthObjects: response.data.near_earth_objects });
		this.setState({ NearEarthObjectsCount: response.data.element_count });
	};

	updateDateSelection = (startDate, endDate) => {
		this.setState({
			StartDateSelection: startDate,
			EndDateSelection: endDate,
		});
	};

	render() {
		const CurrentState = this.state.NearEarthObjects;

		return (
			<div className="ui container">
				<DatePicker
					startDate={this.state.StartDateSelection}
					endDate={this.state.EndDateSelection}
					IsButtonDisabled={this.state.IsButtonDisabled}
					OnDateInputChange={this.updateDateSelection}
					OnButtonClick={this.onButtonClick}
				/>
				I have found {this.state.NearEarthObjectsCount} objects
				<ObjectList EObjects={this.state.NearEarthObjects} />
			</div>
		);
	}
}

export default App;
