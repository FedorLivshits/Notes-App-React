import React from "react";

import {addNote, setNewTextareaText} from "../redux/note-reducer";
import {connect} from "react-redux";


function NotesApp({notes, newTextareaText, setNewTextareaText, addNote}) {
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
                        <button onClick={addNewNote}>Add</button>
                    </div>
                    <div className="notes-content">
                        <Note notes={notes}/>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Note({notes}) {
    return ( <>
        {notes.map(n => <div className="note" id={n.id}>
                {n.text}
            </div>
        )}
        </>
    )
}

let mapStateToProps = (state) => {
    return {
        notes: state.notes.notes,
        newTextareaText: state.notes.newTextareaText
    }
}


export default connect(mapStateToProps, {setNewTextareaText, addNote})(NotesApp)