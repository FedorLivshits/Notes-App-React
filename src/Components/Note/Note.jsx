import React from "react";

function Note({notes, showFullNote, deleteNote}) {
    return (notes.map(n =>
            <div className={`note ${n.color}`}>
                <div className="note-title" key={n.id} onClick={() => showFullNote(n.id)}>
                    {n.text}
                </div>
                <button className="delete-note__btn" onClick={() => deleteNote(n.id)}>X</button>
            </div>
        )
    )
}
export default Note;