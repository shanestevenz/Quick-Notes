import React from 'react';
import Note from './components/Note';


export default function Board({id, title, notes }) { //add some kind of token


    return (
        <div className='board'>
          
            {notes.map((note) => 
            (
                <Note
                 id={note.id}
                 title={note.title}
                 content={note.content}
                 color= {note.color}
                 date={note.date}
                 posX = {note.posX}
                 posY={note.posY}
                
                />
            )
            )}


        </div>
    )
}
