export const selectAllSubjects = state => state.subject.allSubjects
export const selectActiveSubject = state => state.subject.activeSubject
export const newSubject = state=> state.subject.newSubject

export const selectFlashCards = state => state.subject.activeSubject.flashcards