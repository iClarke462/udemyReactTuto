import React from 'react';
import { DateInput } from 'semantic-ui-calendar-react';
import { Form } from 'react-bootstrap';

function parseDate(input) {
	var parts = input.match(/(\d+)/g);
	// new Date(year, month [, date [, hours[, minutes[, seconds[, ms]]]]])
	return new Date(parts[0], parts[1] - 1, parts[2]); // months are 0-based
}

class DatePicker extends React.Component {
	state = {
		startDate: '2020-01-01',
		endDate: '2020-01-05',
		IsButtonDisabled: false,
	};

	componentDidMount() {
		this.UpdateButtonStatus(this.state.startDate, this.state.endDate);
	}
	UpdateButtonStatus(startDate, endDate) {
		const date_diff_time = parseDate(endDate).getTime() - parseDate(startDate).getTime();
		const date_diff_days = Math.floor(date_diff_time / (1000 * 3600 * 24));

		this.setState({ IsButtonDisabled: date_diff_days > 7 ? true : false });
	}

	StarthandleChange = (event, value) => {
		this.setState({ startDate: value.value });
		this.UpdateButtonStatus(value.value, this.state.endDate);
	};

	EndhandleChange = (event, value) => {
		this.setState({ endDate: value.value });

		this.UpdateButtonStatus(this.state.startDate, value.value);
	};
	SubmitButtonClick = event => {
		event.preventDefault();

		this.props.OnButtonClick({
			startDate: this.props.startDate.value,
			endDate: this.props.endDate.value,
		});
	};

	render() {
		return (
			<div className="ui segment">
				<form className="ui form">
					<div className="field">
						<label>Start Date</label>
						<DateInput
							name="startDate"
							placeholder="Start Date"
							dateFormat="YYYY-MM-DD"
							value={this.state.startDate.toString()}
							iconPosition="left"
							onChange={this.StarthandleChange}
						/>
					</div>
					<div className="field">
						<label>End Date</label>
						<DateInput
							name="endDate"
							placeholder="End Date"
							dateFormat="YYYY-MM-DD"
							value={this.state.endDate.toString()}
							iconPosition="left"
							onChange={this.EndhandleChange}
						/>
					</div>
					<div className="field">
						<button
							className={this.state.IsButtonDisabled ? 'ui button disabled' : 'ui button'}
							onClick={this.SubmitButtonClick}
						>
							Search
						</button>
					</div>
				</form>
			</div>
		);
	}
}

export default DatePicker;
