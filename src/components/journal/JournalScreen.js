import React from 'react'
import { useSelector } from 'react-redux'
import { NoteScreen } from '../notes/NoteScreen'
import { NothingSelected } from './NothingSelected'
import { SideBar } from './SideBar'

export const JournalScreen = () => {

    const { active } = useSelector(state => state.notes)

    return (    
        <div 
            className="journal__main-content animate__animated animate__fadeIn"
        >
            <SideBar />

            <main>
                {
                    // si existe algo en active mostraremos noteScreen
                    ( active )
                        ? ( <NoteScreen /> )
                    // de lo contrario se mostrara el siguiente componente
                        : ( <NothingSelected />)
                }
            </main>


        </div>
    )
}
