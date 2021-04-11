import React from "react";

import {addNote, deleteNote, setNewTextareaText, showFullNote} from "../redux/note-reducer";
import {connect} from "react-redux";


function NotesApp({notes, newTextareaText, setNewTextareaText, addNote, showFullNote, deleteNote}) {
    const changeText = (e) => {
        let text = e.target.value
        setNewTextareaText(text)
    }
    const addNewNote = () => {
        addNote()
    }
    return (
        <section className="App">
            <div className="App-header">
                NotesApp
                <div className="container">
                    <div className="notes-form">
                        <textarea placeholder="write your note..." onChange={changeText} value={newTextareaText}/>
                        <button className="add-note__btn" onClick={addNewNote}>Add</button>
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
            <div className="note">
                <div key={n.id} onClick={() => showNote(n.id)}>
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
        newTextareaText: state.notes.newTextareaText
    }
}


export default connect(mapStateToProps, {setNewTextareaText, addNote, showFullNote, deleteNote})(NotesApp)