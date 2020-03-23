import React from 'react';

const ObjectItem = props => {
	return (
		<div className="item">
			<div className="content">
				<div className="header">
					{props.ObjectItemContent.length} Objects on {props.DateLabel}
				</div>
			</div>
		</div>
	);
};

export default ObjectItem;
