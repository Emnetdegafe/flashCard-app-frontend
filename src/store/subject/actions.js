import buildAxios from '../../config/buildAxios'

export const fetchAllSubjets = () => async (dispatch, useState) => {

	const { token } = useState().user

	try {

		const response = await buildAxios(token).get('/subjects')
		console.log(response.data)
	} catch (e) {
		console.log('error', e)
	}

}
