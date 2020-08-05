import buildAxios from '../../config/buildAxios'
export const ADD_USER_SUBJECTS = 'ADD_USER_SUBJECTS'
export const ADD_ACTIVE_SUBJECT = 'ADD_ACTIVE_SUBJECT'

export const fetchAllSubjets = () => async (dispatch, useState) => {
	console.log('fetching all subjects')

	const { token } = useState().user

	try {

		const response = await buildAxios(token).get('/subjects')
		dispatch({
			type: ADD_USER_SUBJECTS,
			payload: response.data.subjects

		})
	} catch (e) {
		console.log('error', e)
	}

}

export const fetchSubjectById = (id) => async (dispatch, useState) => {
	const { token } = useState().user
	try {
		const response = await buildAxios(token).get(`/subjects/${id}`)
		dispatch({
			type: ADD_ACTIVE_SUBJECT,
			payload: response.data

		})
	} catch (e) {
		console.log('error', e)
	}

}