import React from "react";

function Note({notes, showFullNote, deleteNote}) {
    return (notes.map(n =>
        <div className="overlay">
            <div key={n.id} className={`note ${n.color}`}>
                <div className="note-title" onClick={() => showFullNote(n.id)}>
                    {n.text}
                </div>
                <button className="delete-note__btn" onClick={() => deleteNote(n.id)}>X</button>
            </div>
        </div>

        )
    )
}
export default Note;