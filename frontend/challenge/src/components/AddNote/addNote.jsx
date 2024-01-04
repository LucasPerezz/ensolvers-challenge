import React, { useContext } from 'react'
import { useNoteProvider } from '../../context/Context';

const AddNote = () => {
const {setTextOfTheNote, createNote, setTitle, text} = useContext(useNoteProvider);


return (

<form className="lg:max-w-lg w-full max-w-sm lg:w-[500px] mx-auto p-5 flex flex-col justify-center gap-3">
  <label className="block mb-2 text-xl font-bold text-red-500">Crear Nota</label>
  <input aria-describedby="helper-text-explanation"
    class="bg-gray-100 text-gray-900 text-sm rounded-lg p-2"
    placeholder="Titulo" onChange={(e) => setTitle(e.target.value)}/>
  <textarea rows="4"
    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-100"
    placeholder="Tu nota..." onChange={(e)=> setTextOfTheNote(e.target.value)}></textarea>
  <button type="button"
    className="text-white bg-red-400 hover:bg-red-500 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2"
    onClick={() => {
      createNote(text);
      setTimeout(() => {
        window.location.reload();
      }, 100);
    }}>Guardar</button>
</form>

)
}

export default AddNote;