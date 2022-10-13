import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import stickyImg from '../../public/icons/stickyNote.png'
import plusImg from '../../public/icons/boardPlus.png'
import gearImg from '../../public/icons/settingsGear.png'
import whiteStickyImg from '../../public/icons/whiteNote.png'

export default function Sidebar( ) 
{
  return(

    <Menu>
    <span>
    <img src={stickyImg} class='stickyNotes'/>
    <h2>Quick Notes</h2>
    </span>

    <ul id="boardList">
    </ul>
    <div id="addBoardBtn">
    <img src={plusImg} class='boardPlus'/>
    <p>Add Board</p>
    </div>
    <span id="settingsBtn">
    <img src={gearImg} class='settings'/>
    <h2>Settings</h2>
    </span>
    </Menu>
    
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

  
