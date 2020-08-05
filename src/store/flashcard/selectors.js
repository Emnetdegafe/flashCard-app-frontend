

export const selectCurrentFlashcard = state => {

	const flashcard = {
		title: state.flashcard.current.name,
		question: state.flashcard.current.question,

		status: state.flashcard.current.status
	}
	return flashcard
}

export const selectAlternativeCards = state => {
	return {
		possibleCards: state.flashcard.alternatives.altOptions,
		correctResponse: state.flashcard.alternatives.correctOpt,
	}
}

// [wrong, wrong, right, wrong]

// correctone = 2

//  This should respond like

// TITLE
// QUESTION
// RESPONSES 
// CORRECT RESPONSE ID