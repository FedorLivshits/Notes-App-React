import React from "react";


function NotesForm({newTextareaText, addNote, notesColors, newNoteColor, setNewTextareaText, setNoteColor}) {
    const changeText = (e) => {
        let text = e.target.value
        setNewTextareaText(text)
    }
    const setColor = (e) => {
        let colorValue = e.target.value
        setNoteColor(colorValue)
    }
return (
    <div className="notes-form">
        <textarea placeholder="write your note..." onChange={changeText} value={newTextareaText}/>
        <div className="notes-form__btns">
            <div className="note-colors">
                {notesColors.map(c => <button className={(newNoteColor === c.color) ? `btn-color active ${c.color}` : `btn-color ${c.color}`} value={c.color} onClick={setColor}/>)}
            </div>
            <button className="add-note__btn" disabled={!newTextareaText} onClick={addNote}>Add</button>
        </div>
    </div>
)
}

export default NotesForm;