import API from '../api';

export const getAllRides = () => {
	return API.get(`rides`).then(
		res => res.data
	)
}
