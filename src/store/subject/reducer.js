import {
	ADD_USER_SUBJECTS,
	ADD_ACTIVE_SUBJECT,
	ADD_NEW_SUBJECT
} from './actions'

const initialState = {
	allSubjects: [],
	activeSubject: {},
	
}

export default (state = initialState, { type, payload }) => {
	switch (type) {

		case ADD_USER_SUBJECTS:
			return { ...state, allSubjects: payload }

		case ADD_ACTIVE_SUBJECT:
			return { ...state, activeSubject: payload }
		case ADD_NEW_SUBJECT:
			return { ...state, allSubjects:[...state.allSubjects, payload]}

		default:
			return state
	}
}
