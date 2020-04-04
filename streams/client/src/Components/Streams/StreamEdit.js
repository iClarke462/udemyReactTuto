import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../Actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}
	onSubmit = formValues => {
		this.props.editStream(this.props.match.params.id, formValues);
	};
	render() {
		//console.log(this.props); // Need this.props instead of just props for class based components
		if (!this.props.stream) {
			return <div>Loading ...</div>;
		}
		return (
			// InitialValue is a protected props name
			// Double curly braces mean we define an object within a JXS expression
			// Lodash allows to only pass a subset of the stream properties : all except ID and userID which are not actually edited here
			// Lodash does not modify the original object
			<div>
				<h3>Edit a stream</h3>
				<StreamForm
					initialValues={_.pick(this.props.stream, 'title', 'description')}
					onSubmit={this.onSubmit}
				/>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	// second arg to mapStateToProps is OwnProps to help merge props (available only in streamedit compo) and state available only in mstp
	return {
		stream: state.streams[ownProps.match.params.id], // Select appropriate strean within collection of streams in state
	};
};
export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
