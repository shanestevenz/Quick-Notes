import React, { useState, useEffect, useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

export default function Note({ id, title, content, color, date, posX, posY, deleteNote }) { //add some kind of token

    const [noteContent, setNoteContent] = useState(content);
    const [noteTitle, setNoteTitle] = useState(title);
    const characterLimit = 200;
    // const { ref, isComponentVisible } = useComponentVisible(true);
    // setNoteContent(content)

    // const ref = useRef(null);


    // const handleClickOutside = (event) => {
    //     if (ref.current && !ref.current.contains(event.target)) {
    //       // Update Note
    //       console.log("CLicked outside note, save it!")
    //     }
    // };

    // useEffect(() => {
    //     document.addEventListener('click', handleClickOutside, true);
    //     return () => {
    //         document.removeEventListener('click', handleClickOutside, true);
    //     };
    // }, []);




    const handleNoteChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) { //if we are less then or equal to the limit, then set text 
            setNoteContent(event.target.value);
            console.log("Setting Note Text")
        }
    };


    const handleNoteTitleChange = (event) => {

        setNoteTitle(event.target.value);

        console.log("Setting Note TITLE")
    };


    const handleDeleteNote = (event) => {
        console.log("Delete Note Clicked!")
        deleteNote(id)
    };
    return (
        
            <div className='note' style={{ backgroundColor: color }} >
                <div className='note-header'>


                    <input type="text" className='note-title' value={noteTitle} onChange={handleNoteTitleChange} />

                    <input className='delete-btn' type="image" src="/ic_exit_handDrawn.png" onClick={handleDeleteNote} />


                </div>
                <hr className='note-line' />
                <div className='note-content'>

                    <TextareaAutosize rows='8' className='note-text-area'
                        cols='10'
                        placeholder='Type to add a note...'
                        value={noteContent}
                        onChange={handleNoteChange}


                    ></TextareaAutosize>

                </div>



            </div>
      
    )
}
