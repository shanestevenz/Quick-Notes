import React, { useState } from 'react';
import Board from '../Board';

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
    const [notes, setNotes] = useState([
        {
            id: 12,
            title: "First Note",
            content: "This is my first note, hurray!",
            color: "#FB9D9D",
            date: "10/11/2000",
            posX: 25,
            posY: 25
        },
        {
            id: 123,
            title: "Second Note",
            content: "This is my Second note, hurray!",
            color: "#89B0EB",
            date: "10/12/2022",
            posX: 100,
            posY: 2
        },
        {
            id: 1234,
            title: "Third Note",
            content: "This is my Third note, hurray!",
            color: "#89EBB6",
            date: "10/13/2022",
            posX: 120,
            posY: 0
        },
        {
            id: 12345,
            title: "Fourth Note",
            content: "This is my Fourth note, hurray!",
            color: "#E989EB",
            date: "10/14/2000",
            posX: 100,
            posY: 100
        },
        {
            id: 123456,
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
            
            <h1>HOme Boy</h1>
            <Board notes={notes}></Board>
        </div>
    )
}
