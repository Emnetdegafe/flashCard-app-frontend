import {
	ADD_USER_SUBJECTS,
	ADD_ACTIVE_SUBJECT
} from './actions'

const initialState = {
	allSubjects: [],
	activeSubject: {}
}

export default (state = initialState, { type, payload }) => {
	switch (type) {

		case ADD_USER_SUBJECTS:
			return { ...state, allSubjects: payload }

		case ADD_ACTIVE_SUBJECT:
			return { ...state, activeSubject: payload }

		default:
			return state
	}
}
