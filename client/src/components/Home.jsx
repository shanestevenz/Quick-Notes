import React, { useState } from 'react';
import Board from '../Board';
import Sidebar from './Sidebar';
import { nanoid } from 'nanoid';
export default function Home() { //add some kind of token

    //id, title, content, color, date, posX, posY


    //COLORS
    /*
        Red: "#FB9D9D"
        Blue:  "#89B0EB"
        Green: "#89EBB6"
        Yellow: "#FFF495"
        Purple: "#E989EB"

    */

        const addNote = (color) => {
            const date = new Date();
            const newNote = {
                id: nanoid(),
                title: "untitled note",
                content: "start typing here...",
                color: getColor(color),
                date: "10/12/2000",
                posX: 25,
                posY: 25
            };
            const newNotes = [...notes, newNote];
            setNotes(newNotes);
        };
    
        const deleteNote = (id) => {

            console.log("DELETEING STICKY NOTE")
            const newNotes = notes.filter((note) => note.id !== id);
            setNotes(newNotes);
        };

      
const getColor =  (color) =>
{
    let hexcode = "#89EBB6";
    switch(color) {
        case "red":
            hexcode = "#FB9D9D"
          break;
          case "blue":
            hexcode = "#89B0EB"
          break;
          case "green":
            hexcode = "#89EBB6"
          break;
          case "yellow":
            hexcode = "#FFF495"
          break;
          case "purple":
            hexcode = "#E989EB"
          break;
        default:
            hexcode = "#89EBB6"
        
      }

      return hexcode
}

    const [notes, setNotes] = useState([
        {
            id: nanoid(),
            title: "First Note",
            content: "This is my first note, hurray!",
            color: "#FB9D9D",
            date: "10/11/2000",
            posX: 25,
            posY: 25
        },
        {
            id: nanoid(),
            title: "Second Note",
            content: "This is my Second note, hurray!",
            color: "#89B0EB",
            date: "10/12/2022",
            posX: 100,
            posY: 2
        },
        {
            id: nanoid(),
            title: "Third Note",
            content: "This is my Third note, hurray!",
            color: "#89EBB6",
            date: "10/13/2022",
            posX: 120,
            posY: 0
        },
        {
            id: nanoid(),
            title: "Fourth Note",
            content: "This is my Fourth note, hurray!",
            color: "#E989EB",
            date: "10/14/2000",
            posX: 100,
            posY: 100
        },
        {
            id: nanoid(),
            title: "Fifth Note",
            content: "This is my Fifth note, hurray!",
            color: "#FFF495",
            date: "10/15/2000",
            posX: 33,
            posY: 100
        },
    ]);

    return (
        <div className="home-wrapper">
            
            {/* <Sidebar></Sidebar> */}
            <Board notes={notes} handleAddNote={addNote} handleDeleteNote={deleteNote}></Board>
        </div>
    )


}
