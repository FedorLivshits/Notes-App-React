import React, {useState} from "react";


function NotesForm({newTextareaText, addNote, notesColors, newNoteColor, setNewTextareaText, setNoteColor}) {
    const[newInputText, setNewInputText]=useState('')

    const changeInputText = (e) => {
        let text = e.target.value
        setNewInputText(text)
    }
    const changeText = (e) => {
        let text = e.target.value
        setNewTextareaText(text)
    }
    const setColor = (e) => {
        let colorValue = e.target.value
        setNoteColor(colorValue)
    }
    const onAddNote = () => {
        addNote(newInputText)
        setNewInputText("")
    }

return (
    <>
    <input type="text" placeholder="write note title..." onChange={changeInputText} value={newInputText}/>
    <div className="notes-form">
        <textarea placeholder="write your note..." onChange={changeText} value={newTextareaText}/>
        <div className="notes-form__btns">
            <div className="note-colors">
                {notesColors.map((c, index) => <button key={index} className={(newNoteColor === c.color) ? `btn-color active ${c.color}` : `btn-color ${c.color}`} value={c.color} onClick={setColor}/>)}
            </div>
            <button className="add-note__btn" disabled={!newTextareaText || !newInputText} onClick={onAddNote}>Add</button>
        </div>
    </div>
        </>
)
}

export default NotesForm;