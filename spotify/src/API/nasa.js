import React from 'react';
import Axios from 'axios';

const key = 'dVP7yZWJdzkFzhCTeYeLAcnqCwxgrixZYANEqb0K';
export default Axios.create({
	baseURL: 'https://api.nasa.gov/neo/rest/v1/feed?',
	params: {
		api_key: `${key}`,
	},
});
