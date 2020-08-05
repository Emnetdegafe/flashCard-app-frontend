function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

export const selectCurrentFlashcard = state => {

	const random = getRandomInt(state.flashcard.alternatives.length)

	// console.log('random number', random)
	// console.log('Flashcard state', state.flashcard)
	// console.log('alternative cards', state.flashcard.alternatives)

	const copyOfAlt = [...state.flashcard.alternatives]

	// console.log('copied alternative', state.flashcard.alternatives)

	copyOfAlt.splice(random, 0, state.flashcard.current)


	// console.log('spliced miguel in position 1', state.flashcard.alternatives.splice(1, 0, 'miguel'))

	const flashcard = {
		title: state.flashcard.current.name,
		question: state.flashcard.current.question,
		possibleCards: copyOfAlt,
		correctResponse: random
	}
	return flashcard
}

// [wrong, wrong, right, wrong]

// correctone = 2

//  This should respond like

// TITLE
// QUESTION
// RESPONSES 
// CORRECT RESPONSE ID