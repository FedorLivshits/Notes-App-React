import React from "react";

function NotesApp() {

    return (
        <section className="App">
            <div className="App-header">
                NotesApp
                <div className="container">
                    <div className="notes-form">
                        <textarea placeholder="write your note..."/>
                        <button>Add</button>
                    </div>
                    <div className="notes-content">
                        <div className="note">
                            Hello
                        </div>
                        <div className="note">
                            Hello
                        </div>
                        <div className="note">
                            Hello
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
}
export default NotesApp