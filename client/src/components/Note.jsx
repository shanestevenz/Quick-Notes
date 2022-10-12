import React, { useState, useEffect, useRef } from 'react';


export default function Note({id, title, content, color, date, posX, posY }) { //add some kind of token
   
    const [noteContent, setNoteContent] = useState(content);
	const characterLimit = 200;
   // const { ref, isComponentVisible } = useComponentVisible(true);
  // setNoteContent(content)

    const ref = useRef(null);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          // Update Note
          console.log("CLicked outside note, save it!")
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);




    const handleNoteChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) { //if we are less then or equal to the limit, then set text 
			setNoteContent(event.target.value);
            console.log("Setting Note Text")
		}
	};

    return (
        <div className='note' ref={ref} style={{ backgroundColor: color}} >
            <div className='note-header'>

                <small className='note-title'>{title}</small>
                <small className='delete-btn'>X</small>
               
            </div>
            <hr className='note-line'/>
            <div className='note-content'>
                <textarea rows='8'
				cols='10'
				placeholder='Type to add a note...'
				value={noteContent}
				onChange={handleNoteChange}>


                </textarea>
                
            </div>



        </div>
    )
}
//<span> {content}</span>


// export default function useComponentVisible(initialIsVisible) {
//     const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
//     const ref = useRef(null);

//     const handleClickOutside = (event) => {
//         if (ref.current && !ref.current.contains(event.target)) {
//             setIsComponentVisible(false);
//         }
//     };

//     useEffect(() => {
//         document.addEventListener('click', handleClickOutside, true);
//         return () => {
//             document.removeEventListener('click', handleClickOutside, true);
//         };
//     }, []);

//     return { ref, isComponentVisible, setIsComponentVisible };
// }
