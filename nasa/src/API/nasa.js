import React from 'react';
import Axios from 'axios';

const KEY = 'dVP7yZWJdzkFzhCTeYeLAcnqCwxgrixZYANEqb0K';

export default Axios.create({
	baseURL: 'https://api.nasa.gov/neo/rest/v1',
	params: {
		api_key: `${KEY}`,
	},
});
