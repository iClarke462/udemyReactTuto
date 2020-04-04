import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { fetchStream, deleteStream } from '../../Actions';

class StreamDelete extends React.Component {
	// CHsanging to class to add lifecyle method such as componentDidMount
	componentDidMount() {
		this.props.fetchStream(this.props.match.params.id);
	}
	renderActions() {
		const id = this.props.match.params.id;
		//const {id} = this.props.match.params; // Equivalent ES2015
		return (
			<React.Fragment>
				<button onClick={() => this.props.deleteStream(id)} className="ui button negative">
					Delete
				</button>
				<Link to="/" className="ui button">
					Cancel
				</Link>
			</React.Fragment>
		);
	}
	renderContent() {
		if (!this.props.stream) {
			return 'Are you sure you want to delete this stream ?';
		}
		return `Are you sure you want to delete the stream with title : ${this.props.stream.title} ? `;
	}
	render() {
		return (
			<Modal
				title="Delete stream"
				content={this.renderContent()}
				actions={this.renderActions()} // With parenthesis = calling the function rather than simply reference
				onDismiss={() => history.push('/')}
			/>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		stream: state.streams[ownProps.match.params.id],
	};
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
