import React from 'react';
import axios from 'axios';

const KEY = 'AIzaSyDG36nR25IAOddhUYNRodQ6VDraiIvtmUA';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		type: 'video',
		key: `${KEY}`,
	},
});
