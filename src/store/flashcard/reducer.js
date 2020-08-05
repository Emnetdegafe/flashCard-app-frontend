import { ADD_ACTIVE_FLASHCARD, ADD_ALTERNATIVES } from './actions'


function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}


const initialState = {
	current: {},
	alternatives: {
		correctOpt: 0,
		altOptions: [],
	}
}

export default (state = initialState, { type, payload }) => {
	switch (type) {

		case ADD_ACTIVE_FLASHCARD:
			return { ...state, current: payload.current }

		case ADD_ALTERNATIVES:
			const random = getRandomInt(payload.alternatives.length)
			const copyOfAlt = [...payload.alternatives]
			copyOfAlt.splice(random, 0, state.current)

			return {
				...state,
				alternatives: {
					...state.alternatives,
					altOptions: copyOfAlt,
					correctOpt: random
				}
			}

		default:
			return state
	}
}
