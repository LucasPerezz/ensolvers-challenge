import React, { useContext } from 'react';
import AddNote from '../AddNote/addNote';
import Notes from '../Notes/Notes';
import { useNoteProvider } from '../../context/Context';



const Home = () => {
  const { notes } = useContext(useNoteProvider);
  

  return (
    <section className='min-h-screen bg-slate-100'>
        <div className='flex w-full gap-10'>
            <AddNote />
            <div className='flex flex-col md:flex-row w-full flex-wrap gap-10'>
              {notes.map((note) => 
                <Notes key={note.id} data={note} />
              )}
            </div>
        </div>
    </section>
  )
}

export default Home