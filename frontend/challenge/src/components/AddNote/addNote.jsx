import React, { useContext } from 'react'
import { useNoteProvider } from '../../context/Context';

const AddNote = () => {
const {setTextOfTheNote, createNote, setTitle, text} = useContext(useNoteProvider);

return (

<form className="max-w-lg w-[500px] mx-auto p-5 flex flex-col gap-3">
  <label for="message" className="block mb-2 text-xl font-bold text-gray-900">Crear Nota</label>
  <input type="email" id="helper-text" aria-describedby="helper-text-explanation"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Titulo" onChange={(e) => setTitle(e.target.value)}/>
  <textarea id="message" rows="4"
    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Tu nota..." onChange={(e)=> setTextOfTheNote(e.target.value)}></textarea>
  <button type="button"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    onClick={() => {
      createNote(text);
      
      //Hacerlo con javascript vanilla
    }}>Guardar</button>
</form>

)
}

export default AddNote;