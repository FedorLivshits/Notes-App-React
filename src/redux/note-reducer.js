const SET_NEW_TEXTAREA_TEXT = 'SET_NEW_TEXTAREA_TEXT';
const ADD_NOTE = 'ADD_NOTE';
const SHOW_FULL_NOTE = 'SHOW_FULL_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';

let noteId = 4

let initialState = {
    notes: [
        {id: 1, text: "как дела?", color: "yellow"},
        {id: 2, text: "новая заметка", color: "yellow"},
        {id: 3, text: "react-redux", color: "yellow"}
    ],
    notesColors: [{color: "yellow"}, {color: "green"}, {color: "blue"}, {color: "red"}, {color: "grey"}],
    newTextareaText: ""
}

const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_TEXTAREA_TEXT: {
            return {...state, newTextareaText: action.newTextareaText}
        }
        case ADD_NOTE: {
            let note = {id: noteId++, text: state.newTextareaText}
            return {...state, notes: [...state.notes, note], newTextareaText: ""}
        }
        case SHOW_FULL_NOTE: {
            let newArr = state.notes.filter(n => {
                if (n.id === action.id) {
                    return n
                }})
            let textNote = newArr.map(i => i.text).join()
            return {
                ...state, newTextareaText: textNote
            }
        }
        case DELETE_NOTE: {
            return {...state, notes: state.notes.filter(n => n.id !== action.id)}
        }
        default:
            return state;
    }
}

export const setNewTextareaText = (newTextareaText) => ({type: SET_NEW_TEXTAREA_TEXT, newTextareaText});
export const addNote = () => ({type: ADD_NOTE});
export const showFullNote = (id) => ({type: SHOW_FULL_NOTE, id});
export const deleteNote = (id) => ({type: DELETE_NOTE, id});

export default noteReducer;

