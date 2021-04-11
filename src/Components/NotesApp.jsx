import React from "react";

import {addNote, deleteNote, setNewTextareaText, setNoteColor, showFullNote} from "../redux/note-reducer";
import {connect} from "react-redux";


function NotesApp({notes, newTextareaText, setNewTextareaText, addNote, showFullNote, deleteNote, notesColors, setNoteColor, newNoteColor}) {
    const changeText = (e) => {
        let text = e.target.value
        setNewTextareaText(text)
    }
    const addNewNote = () => {
        addNote()
    }
    const setColor = (e) => {
        let colorValue = e.target.value
        setNoteColor(colorValue)
    }
    return (
        <section className="App">
            <div className="App-header">
                NotesApp
                <div className="container">
                    <div className="notes-form">
                        <textarea placeholder="write your note..." onChange={changeText} value={newTextareaText}/>
                        <div className="notes-form__btns">
                            <div className="note-colors">
                                {notesColors.map(c => <button className={(newNoteColor === c.color) ? `btn-color active ${c.color}` : `btn-color ${c.color}`} value={c.color} onClick={setColor}/>)}
                            </div>
                            <button className="add-note__btn" disabled={!newTextareaText} onClick={addNewNote}>Add</button>
                        </div>

                    </div>
                    <div className="notes-content">
                        <Note notes={notes} showFullNote={showFullNote} deleteNote={deleteNote}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Note({notes, showFullNote, deleteNote}) {
    const showNote = (id) => {
        showFullNote(id)
    }
    return (notes.map(n =>
            <div className={`note ${n.color}`}>
                <div className="note-title" key={n.id} onClick={() => showNote(n.id)}>
                    {n.text}
                </div>
                <button className="delete-note__btn" onClick={() => deleteNote(n.id)}>X</button>
            </div>
        )
    )
}

let mapStateToProps = (state) => {
    return {
        notes: state.notes.notes,
        newTextareaText: state.notes.newTextareaText,
        notesColors: state.notes.notesColors,
        newNoteColor: state.notes.newNoteColor
    }
}


export default connect(mapStateToProps, {setNewTextareaText, addNote, showFullNote, deleteNote, setNoteColor})(NotesApp)