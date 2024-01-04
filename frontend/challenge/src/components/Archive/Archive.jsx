import React, { useContext } from 'react'
import { useNoteProvider } from '../../context/Context'
import Notes from '../Notes/Notes';
import Header from '../Header/Header';

const Archive = () => {

    const { notesArchived } = useContext(useNoteProvider);

  return (
    <section className='min-h-screen'>
      <Header />
        <div className='w-full flex-col md:flex-row items-center md:items-start flex gap-5 flex-wrap mt-8'>
            {notesArchived.map((note) => 
                <Notes key={note.idNote} data={note} type={"archived"}/>
            )}
        </div>
    </section>
  )
}

export default Archive