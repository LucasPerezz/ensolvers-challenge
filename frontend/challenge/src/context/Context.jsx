import { createContext, useEffect, useState } from "react";

export const useNoteProvider = createContext(undefined);


export const Context = ({children}) => {

    const [notes, setNotes] = useState([]);
    const [notesArchived, setNotesArchived] = useState([]);
    const [textOfTheNote, setTextOfTheNote] = useState('');
    const [title, setTitle] = useState('');

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

    const deleteArchiveNote = async (id) => {
        await fetch(`http://localhost:3000/api/archived/${id}`, {
            method: "delete"
        });
    };

    const updateNote = async (id, text) => {
        const response = await fetch(`http://localhost:3000/api/notes/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(text)
        });

        if(!response.ok) {
            console.log("error en la solicitud");
        }

    }

    

    const archiveNote = async (id) => {
        await fetch(`http://localhost:3000/api/notes/${id}`)
        .then((res) => res.json())
        .then(async (data) => {
            await fetch(`http://localhost:3000/api/archived/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data[0])
            })
        })
        .catch((err) => console.log(err))
    }

    const unarchivedNote = async (id) => {
        await fetch(`http://localhost:3000/api/archived/${id}`)
        .then((res) => res.json())
        .then(async (data) => {
            await fetch(`http://localhost:3000/api/unarchived/${id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data[0])
            })
        })
        .catch((err) => console.log(err))
    }

    

    useEffect(() => {
         fetch(`http://localhost:3000/api/archived`)
         .then((res) => res.json())
         .then((data) => setNotesArchived(data))
         .catch((err) => console.log(err))
    }, [])

    

    return (
        <useNoteProvider.Provider value={{
            notes,
            setNotes,
            textOfTheNote,
            setTextOfTheNote,
            createNote,
            setTitle,
            title,
            text,
            deleteNote,
            updateNote,
            archiveNote,
            unarchivedNote,
            notesArchived,
            deleteArchiveNote,
        }}>
            {children}
        </useNoteProvider.Provider>
    )
}

