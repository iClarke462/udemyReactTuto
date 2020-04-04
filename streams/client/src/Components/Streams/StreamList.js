import React from 'react';
import { connect } from 'react-redux';
import { fetchStreams } from '../../Actions'; // When name is given in def file, names export : with curlyu braces
import { Link } from 'react-router-dom';

class StreamList extends React.Component {
	// This becomes a class because we need to fetch streams in component did mount method
	componentDidMount() {
		this.props.fetchStreams();
	}
	renderAdmin(stream) {
		// Helper method to render delete and edit buttons in stream list
		if (stream.userId === this.props.currentUserId) {
			return (
				<div className="right floated content">
					<Link to={`/streams/edit/${stream.id}`} className="ui button primary">
						Edit
					</Link>
					<Link to={`/streams/delete/${stream.id}`} className="ui button negative">
						Delete
					</Link>
				</div>
			);
		}
	}
	renderStreamList() {
		return this.props.streams.map(stream => {
			return (
				<div className="item" key={stream.id}>
					{this.renderAdmin(stream)}
					<i className="large middle icon camera" />
					<div className="content">
						<Link to={`/streams/${stream.id}`}>{stream.title}</Link>
						<div className="description">{stream.description}</div>
					</div>
				</div>
			);
			// Stream is now an array thanks to mapStateToProps so we can use map
		});
	}
	renderCreate() {
		if (this.props.isSignedIn) {
			return (
				<div style={{ textAlign: 'right' }}>
					<Link to="/streams/new" className="ui button primary">
						Create Stream
					</Link>
				</div>
			);
		}
	}

	render() {
		return (
			<div>
				<h2>Streams</h2>
				<div className="ui celled list">{this.renderStreamList()}</div>
				{this.renderCreate()}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		streams: Object.values(state.streams),
		currentUserId: state.auth.userId,
		isSignedIn: state.auth.isSignedIn,
	}; // Takes object as argument and inserts content into an array
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
