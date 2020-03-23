import React from 'react';
import ObjectItem from './ObjectItem';
import { render } from 'react-dom';

const ObjectList = props => {
	const temp_list = Object.keys(props.EObjects).map(key => {
		return <ObjectItem DateLabel={key} ObjectItemContent={props.EObjects[key]} />;
	});

	return <div className="ui relaxed divided list">{temp_list}</div>;
};

export default ObjectList;
