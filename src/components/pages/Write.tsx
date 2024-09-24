import React, { useState } from "react";
import app from "../../firebaseConfig";
import { getDatabase, ref, set, push } from "firebase/database";

export default function Write() {
    const [titleInput, setTitleInput] = useState("");
    const [textInput, setTextInput] = useState("");

    const saveData = async () => {
        const db = getDatabase(app);
        const newPosts = push(ref(db, "posts"));
        set(newPosts, {
            title: titleInput,
            text: textInput
        }).then(() => {
            console.log("Data saved successfully");
        }).catch((err) => {
            console.log("Error: ", err);
        })
    }

    return (
        <div className="flex flex-col w-screen h-screen items-center justify-center gap-4">
            <input type="text" value={titleInput} placeholder="Titulo" onChange={(e) => setTitleInput(e.target.value)} />
            <input type="text" value={textInput} placeholder="Texto" onChange={(e) => setTextInput(e.target.value)} />
            <button onClick={saveData} >Guardar</button>
        </div>
    );
}