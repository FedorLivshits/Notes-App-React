import React from "react";
import './App.css';
import {Provider} from "react-redux";
import store from "./redux/store";
import NotesApp from "./Components/NotesApp";

function App() {
    return (
        <Provider store={store}>
            <NotesApp/>
        </Provider>

    );
}

export default App