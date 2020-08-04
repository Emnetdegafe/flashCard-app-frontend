function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

export const selectCurrentFlashcard = state => {
	const random = getRandomInt(state.alternative.length + 1)

	const randomizedFlashcards = state.alternative.splice(random, 0, state.current.question)

	const flashcard = {
		title: state.current.name,
		question: state.current.question,
		possibleResponses: randomizedFlashcards,
		correctResponses: random
	}
}

//  This should respond like

// TITLE
// QUESTION
// RESPONSES 
// CORRECT RESPONSE ID