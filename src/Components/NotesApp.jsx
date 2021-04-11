import React from "react";

import {addNote, deleteNote, setNewTextareaText, setNoteColor, showFullNote} from "../redux/reducers/note-reducer";
import {connect} from "react-redux";
import Note from "./Note/Note";
import NotesForm from "./NotesForm/NotesForm";


function NotesApp({notes, newTextareaText, setNewTextareaText, addNote, showFullNote, deleteNote, notesColors, setNoteColor, newNoteColor}) {

    return (
        <section className="App">
            <div className="App-header">
                NotesApp
                <div className="container">
                    <NotesForm newTextareaText={newTextareaText} addNote={addNote} notesColors={notesColors}
                               newNoteColor={newNoteColor} setNewTextareaText={setNewTextareaText}
                               setNoteColor={setNoteColor}/>
                    <div className="notes-content">
                        <Note notes={notes} showFullNote={showFullNote} deleteNote={deleteNote}/>
                    </div>
                </div>
            </div>
        </section>
    );
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