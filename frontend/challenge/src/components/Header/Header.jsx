import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='h-20 flex justify-evenly mx-auto items-center shadow-md'>
        <Link to={'/'}><p className='text-lg font-bold'>NoteApp</p></Link>
    </header>
  )
}

export default Header