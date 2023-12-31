import { createContext, useEffect, useState } from "react";

export const useNoteProvider = createContext(undefined);


export const Context = ({children}) => {

    const [notes, setNotes] = useState([]);
    const [tags, setTags] = useState([]);
    const [textOfTheNote, setTextOfTheNote] = useState('');
    const [title, setTitle] = useState('');

    const [belongs_to, setBelongs_to] = useState([]);

    const text = {
        title: title,
        description: textOfTheNote
    };

    useEffect(() => {
        fetch("http://localhost:3000/api/notes")
        .then((res) => res.json())
        .then((data) => setNotes(data))
        .catch((err) => console.log(err));

    }, []);

    useEffect(() => {
        fetch("http://localhost:3000/api/tags")
        .then((res) => res.json())
        .then((data) => setTags(data))
        .catch((err) => console.log(err));
    }, []);

    const createNote = async (text) => {
            console.log(text);
           const response = await fetch("http://localhost:3000/api/notes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(text)
            });

            if(!response.ok) {
                console.log("error en la solicitud");
            }
    }

    const deleteNote = async (id) => {
        await fetch(`http://localhost:3000/api/notes/${id}`, {
            method: "delete"
        });
    };

    return (
        <useNoteProvider.Provider value={{
            notes,
            setNotes,
            tags,
            setTags,
            textOfTheNote,
            setTextOfTheNote,
            createNote,
            setTitle,
            title,
            text,
            deleteNote
        }}>
            {children}
        </useNoteProvider.Provider>
    )
}

