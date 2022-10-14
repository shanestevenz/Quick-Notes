import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import stickyImg from '../../public/icons/stickyNote.png'
import plusImg from '../../public/icons/boardPlus.png'
import gearImg from '../../public/icons/settingsGear.png'
import whiteStickyImg from '../../public/icons/whiteNote.png'

import '../sidebar.css'

export default function Sidebar( ) 
{
  return(


    <div id="sidebarDiv">
      <div id="header">
    <img src={stickyImg} class='stickyNotes' id="headerImage"/>
    <h2 id="headerText">Quick Notes</h2>
    </div>

    <ul id="boardList">
    </ul>
    <div id="addBoardBtn">
    <img src={plusImg} id='boardPlus'/>
    <p>Add Board</p>
    </div>
    <div id="logoutBtn">
    <h2>Log out</h2>
    <img src={gearImg} id='gear'/>
    </div>
    </div>
  )}
    


function createNewBoard()
{  
    console.log("create new board")

    const boardList = document.getElementById("boardList")
    const newBoard = document.createElement('li')
    const newSpan = document.createElement('span')
    newSpan.innerHTML = "<img src=" +whiteStickyImg+" class='whiteNotes'/><h2>New Board</h2>"
    newBoard.appendChild(newSpan)
    boardList.appendChild(newBoard)
  
    console.log("just added a new board to the list")
  }



  window.onload = function()
  {

    const addBoardBtn = document.getElementById("addBoardBtn")

    if(addBoardBtn)
    {

    
  addBoardBtn.addEventListener("click", addBoard => {
    addBoard.preventDefault()
    createNewBoard()
  })
}
  }

  
