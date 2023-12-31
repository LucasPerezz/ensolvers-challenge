import React, { useContext } from 'react'
import { BsX } from "react-icons/bs";
import { BsPencilSquare } from "react-icons/bs";
import { useNoteProvider } from '../../context/Context';

const Notes = ({data}) => {

  const {deleteNote} = useContext(useNoteProvider);

  return (
    <article className='w-[300px] h-[300px] bg-yellow-300 flex flex-col gap-10 p-8 relative'>
        <div className='flex justify-center'>
            <p className='font-bold text-lg'>{data.title}</p>
            <BsX className='absolute right-1 top-1 cursor-pointer hover:border-black hover:shadow-md hover:rounded-md' size={"32px"} onClick={() => deleteNote(data.id)}/>
            <BsPencilSquare className='absolute left-1 top-1 hover:border-black hover:shadow-md hover:rounded-md cursor-pointer' size={"24px"}  />
        </div>
        <p className='text-sm'>{data.description}</p>
    </article>
  )
}

export default Notes