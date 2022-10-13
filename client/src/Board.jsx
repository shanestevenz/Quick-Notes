import React from 'react';
import AddNoteBar from './components/AddNoteBar';
import Note from './components/Note';


export default function Board({id, title, notes }) { //add some kind of token


    return (
        <div>
        <div className='board'>
          
            {notes.map((note) => 
            (   
                
                <Note key={note.id}
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
        
        <AddNoteBar></AddNoteBar>
       </div>
    )
}
