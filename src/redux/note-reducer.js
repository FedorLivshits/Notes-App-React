const SET_NEW_TEXTAREA_TEXT = 'SET_NEW_TEXTAREA_TEXT';
const ADD_NOTE = 'ADD_NOTE';

let noteId = 4

let initialState = {
    notes: [
        {id: 1, text: "как дела?"},
        {id: 2, text: "новая заметка"},
        {id: 3, text: "react-redux"}
    ],
    newTextareaText: ""
}

const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_TEXTAREA_TEXT: {
            return {...state, newTextareaText: action.newTextareaText}
        }
        case ADD_NOTE: {
            let note = {id: noteId++, text: state.newTextareaText}
            return {...state, notes: [...state.notes, note], newTextareaText: "" }
        }
        default:
            return state;
    }
}

export const setNewTextareaText = (newTextareaText) => ({type: SET_NEW_TEXTAREA_TEXT, newTextareaText});
export const addNote = () => ({type: ADD_NOTE});

export default noteReducer;

