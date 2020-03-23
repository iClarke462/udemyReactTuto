import React from 'react';
import ReactDOM from 'react-dom';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import DatePicker from './DatePicker';
import ImageList from './ImageList';
class App extends React.Component {
	state = {
		DatePickerLabelText: {
			StartLabel: 'Start Date',
			EndLabel: 'End Date',
		},
	};
	render() {
		return <DatePicker DatePickerLabels={this.state.DatePickerLabelText} />;
	}
}

export default App;
