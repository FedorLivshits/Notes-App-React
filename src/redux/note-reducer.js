const SET_NEW_TEXTAREA_TEXT = 'SET_NEW_TEXTAREA_TEXT';
const ADD_NOTE = 'ADD_NOTE';
const SHOW_FULL_NOTE = 'SHOW_FULL_NOTE';
const DELETE_NOTE = 'DELETE_NOTE';
const SET_NOTE_COLOR = 'SET_NOTE_COLOR';

let noteId = 4

let initialState = {
    notes: [
        {id: 1, text: "как дела?", color: "grey"},
        {id: 2, text: "новая заметка", color: "yellow"},
        {id: 3, text: "react-redux", color: "blue"}
    ],
    notesColors: [{color: "yellow"}, {color: "green"}, {color: "blue"}, {color: "red"}, {color: "grey"}],
    newTextareaText: "",
    newNoteColor: "yellow"
}

const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_TEXTAREA_TEXT: {
            return {...state, newTextareaText: action.newTextareaText}
        }
        case ADD_NOTE: {
            let note = {id: noteId++, text: state.newTextareaText, color: state.newNoteColor}
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
        case SET_NOTE_COLOR: {
            return {...state, newNoteColor: action.color}
        }
        default:
            return state;
    }
}

export const setNewTextareaText = (newTextareaText) => ({type: SET_NEW_TEXTAREA_TEXT, newTextareaText});
export const addNote = () => ({type: ADD_NOTE});
export const showFullNote = (id) => ({type: SHOW_FULL_NOTE, id});
export const deleteNote = (id) => ({type: DELETE_NOTE, id});
export const setNoteColor = (color) => ({type: SET_NOTE_COLOR, color});

export default noteReducer;

