import Axios from 'axios';

export default Axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID KuVkJK9IbSNZqge9AyF5F4U3-zC4jhFz9uOO3JzyOFE',
	},
});
