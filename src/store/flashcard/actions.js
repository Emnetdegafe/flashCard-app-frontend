import buildAxios from '../../config/buildAxios'
import { fetchSubjectById } from '../subject/actions'
export const ADD_ACTIVE_FLASHCARD = 'ADD_ACTIVE_FLASHCARD'
export const ADD_ALTERNATIVES = 'ADD_ALTERNATIVES'


export const fetchFlashcardById = (id) => async (dispatch, useState) => {
	const { token } = useState().user
	try {
		const response = await buildAxios(token).get(`/flashcards/${id}`)
		const { flashcard, alt } = response.data
		console.log('flashcard', flashcard)
		dispatch({
			type: ADD_ACTIVE_FLASHCARD,
			payload: {
				current: flashcard,
			}
		})
		dispatch({
			type: ADD_ALTERNATIVES,
			payload: {
				alternatives: alt,
			}
		})

	} catch (e) {
		console.log('error', e)
	}

}
export const postNewFlashcard = (flashcardObj) => async (dispatch, useState) => {
	const { token } = useState().user
	try {
		const response = await buildAxios(token).post(`/flashcards/`, { flashcard: flashcardObj })
		const { flashcard } = response.data

		dispatch(fetchSubjectById(flashcard.subjectId))

	} catch (e) {
		console.log('error', e)
	}

}


export const updateFlashcardStatus = (newStatus) => async (dispatch, useState) => {
	const { token } = useState().user
	const { id } = useState().flashcard.current
	console.log('new status', newStatus)
	try {
		const response = await buildAxios(token).put(`/flashcards/${id}`, { status: newStatus })
		const { flashcard } = response.data

		dispatch({
			type: ADD_ACTIVE_FLASHCARD,
			payload: {
				current: flashcard,
			}
		})

	} catch (e) {
		console.log('error', e)
	}

} 