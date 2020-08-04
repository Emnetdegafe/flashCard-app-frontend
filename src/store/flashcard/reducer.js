import { ADD_ACTIVE_FLASHCARD } from './actions'
const initialState = {
	current: {},
	alternatives: []
}

export default (state = initialState, { type, payload }) => {
	switch (type) {

		case ADD_ACTIVE_FLASHCARD:
			return { ...state, ...payload }

		default:
			return state
	}
}
