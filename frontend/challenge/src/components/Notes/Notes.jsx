import React, { useContext } from 'react'
import { HiTrash } from "react-icons/hi";
import { useNoteProvider } from '../../context/Context';
import UpdateNote from '../UpdateNote/UpdateNote';
import { IoArchiveOutline } from "react-icons/io5";


const Notes = ({data, type}) => {

  const {deleteNote, archiveNote, unarchivedNote, deleteArchiveNote} = useContext(useNoteProvider);

  return (
    <article className='w-full max-w-[300px] h-[250px] bg-stone-100 flex flex-col gap-10 p-8 relative rounded-sm shadow-sm'>
        <div className='flex justify-center'>
            <p className='font-bold text-xl md:text-2xl  text-red-500'>{data.title}</p>
            <HiTrash className='absolute right-1 top-1 cursor-pointer hover:border-black hover:shadow-md hover:rounded-md' size={"24px"} onClick={() => { 
              type === "archived" 
              ? deleteArchiveNote(data.idNote) 
              : deleteNote(data.id);
              setTimeout(() => window.location.reload(), 50);
          }}/>
            {type === "archived" ? "" : <UpdateNote id={data.id}/>}
            <IoArchiveOutline className='absolute left-1 bottom-1 cursor-pointer hover:border-black hover:shadow-md hover:rounded-md' size={"28px"} onClick={
              () => {
                type === "archived" 
                ? unarchivedNote(data.idNote) 
                : archiveNote(data.id);
                console.log(data.idNote);
                setTimeout(() => {
                  window.location.reload();
                }, 50);
            }}/>
        </div>
        <p className='text-sm md:text-base'>{data.description}</p>
    </article>
  )
}

export default Notes