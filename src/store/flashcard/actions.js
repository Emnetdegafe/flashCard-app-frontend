import buildAxios from '../../config/buildAxios'
import { fetchSubjectById } from '../subject/actions'
export const ADD_ACTIVE_FLASHCARD = 'ADD_ACTIVE_FLASHCARD'


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