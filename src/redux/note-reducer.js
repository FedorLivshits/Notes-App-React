const SET_NEW_TEXTAREA_TEXT = 'SET_NEW_TEXTAREA_TEXT';

let initialState = {
    notes: [
        {id: 1, text: "как дела?"},
        {id: 2, text: "как дела?"},
        {id: 3, text: "как дела?"}
    ],
    newTextareaText: ""
}

const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_TEXTAREA_TEXT: {
            return {...state, newTextareaText: action.newTextareaText}
        }
        default:
            return state;
    }
}

export const setNewTextareaText = (newTextareaText) => ({type: SET_NEW_TEXTAREA_TEXT, newTextareaText});

export default noteReducer;

