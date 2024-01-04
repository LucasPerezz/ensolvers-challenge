import React, { useContext } from 'react'
import { Modal } from 'flowbite-react';
import { useState } from 'react';
import { HiPencil } from "react-icons/hi";
import { useNoteProvider } from '../../context/Context';

const UpdateNote = ({id}) => {
const [openModal, setOpenModal] = useState(false);
const {setTextOfTheNote, setTitle, text, updateNote} = useContext(useNoteProvider);

return (
<>
    <button onClick={()=> setOpenModal(true)} className='absolute left-1 top-1'>
        <HiPencil className='hover:border-black hover:shadow-md hover:rounded-md cursor-pointer' size={"28px"} />
        </button>
    <Modal show={openModal} onClose={()=> setOpenModal(false)}>
        <Modal.Header className='bg-gray-700 text-red-500'>Actualizar Nota</Modal.Header>
        <Modal.Body className='bg-gray-700'>
            <form className="max-w-lg w-full mx-auto p-5 flex flex-col gap-3">
                <input
                    class="bg-gray-800 text-white text-sm rounded-lg block w-full p-2.5"
                    placeholder="Titulo" onChange={(e) => setTitle(e.target.value)}/>
                <textarea rows="4"
                    className="block p-2.5 w-full text-sm text-white bg-gray-800 rounded-lg"
                    placeholder="Tu nota..." onChange={(e) => setTextOfTheNote(e.target.value)}></textarea>
                <button type="button"
                    className="text-white bg-red-400 hover:bg-red-500 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={() => {
                    updateNote(id, text);
                    setTimeout(() => {
                        window.location.reload();
                    }, 50);
                    setOpenModal(!openModal);
                }}>Guardar</button>
            </form>
        </Modal.Body>
    </Modal>
</>
);
}

export default UpdateNote