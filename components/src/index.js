import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import approvalCard from './ApprovalCard';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<h4>Warning !</h4>
				Are your sure ?
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					image={faker.image.avatar()}
					author="Sam"
					timeAgo="Today at 15:45 PM"
					commentText="A really good article"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					image={faker.image.avatar()}
					author="Alex"
					timeAgo="Today at 2:55 AM"
					commentText="Nah, didnt like it"
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					image={faker.image.avatar()}
					author="Jane"
					timeAgo="Yesterday at 15:23 PM"
					commentText="Yes very cool"
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));
