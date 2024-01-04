import React, { useContext } from 'react';
import AddNote from '../AddNote/addNote';
import Notes from '../Notes/Notes';
import { useNoteProvider } from '../../context/Context';
import Header from '../Header/Header';
import { HiOutlineArchive } from "react-icons/hi";
import { Link } from 'react-router-dom';




const Home = () => {
  const { notes } = useContext(useNoteProvider);
  

  return (
    <section className='min-h-screen'>
      <Header />
        <div className='flex flex-col md:flex-row w-full gap-10 md:container shadow-sm min-h-screen mx-auto p-5'>
            <Link to={'/archived'}><HiOutlineArchive size={"40px"}/></Link>
            <AddNote />
            <div className='flex flex-col md:flex-row w-full flex-wrap gap-10 justify-center p-10'>
              {notes.map((note) => 
                <Notes key={note.id} data={note} />
              )}
            </div>
        </div>
    </section>
  )
}

export default Home