import React, {useState, useEffect} from "../../_snowpack/pkg/react.js";
import {useNavigate} from "../../_snowpack/pkg/react-router-dom.js";
import stickyImg from "../../icons/stickyNote.png.proxy.js";
import plusImg from "../../icons/boardPlus.png.proxy.js";
import gearImg from "../../icons/settingsGear.png.proxy.js";
import whiteStickyImg from "../../icons/whiteNote.png.proxy.js";
import "../sidebar.css.proxy.js";
async function logoutUser() {
  const res = await fetch("/logout", {
    method: "GET"
  });
  return res;
}
export default function Sidebar({
  boardIdList,
  setBoardIdList,
  currentBoardId,
  setCurrentBoardId
}) {
  function handleNewBoard(e) {
    e.preventDefault();
    createNewBoard();
  }
  function createNewBoard() {
    console.log("create new board");
    const boardList = document.getElementById("boardList");
    const newBoard = document.createElement("li");
    const newSpan = document.createElement("span");
    newSpan.classList.toggle("boardListElement");
    currentBoardId = Math.max(...boardIdList) + 1;
    if (currentBoardId == -Infinity) {
      currentBoardId = 1;
    }
    boardIdList.push(currentBoardId);
    newSpan.innerHTML = "<img src=" + whiteStickyImg + " class='whiteNotes'/><h2>Board " + currentBoardId + "</h2>";
    newBoard.appendChild(newSpan);
    boardList.appendChild(newBoard);
    setCurrentBoardId(currentBoardId);
    setBoardIdList(boardIdList);
    console.log("just added a new board to the list");
  }
  const navigate = useNavigate();
  const handleLogout = async () => {
    const logout = await logoutUser();
    if (logout.ok) {
      sessionStorage.setItem("loggedIn", "false");
      navigate("/", {replace: true});
      console.log("User logged out");
    } else {
      console.log("Failed to logout");
    }
  };
  const renderBoards = () => {
    console.log("Trying to render boards", boardIdList);
    const boardList = document.getElementById("boardList");
    boardList.innerHTML = "";
    for (let boardId of boardIdList) {
      const newBoard = document.createElement("li");
      newBoard.classList.add("list-item");
      if (boardId == currentBoardId) {
        newBoard.classList.add("selected-board");
      }
      newBoard.onclick = function() {
        document.getElementsByClassName("selected-board").item(0).classList.remove("selected-board");
        currentBoardId = boardId;
        newBoard.classList.add("selected-board");
        setCurrentBoardId(currentBoardId);
      };
      const newSpan = document.createElement("span");
      newSpan.classList.toggle("boardListElement");
      newSpan.innerHTML = "<img src=" + whiteStickyImg + " class='whiteNotes'/><h2>Board " + boardId + "</h2>";
      newBoard.appendChild(newSpan);
      boardList.appendChild(newBoard);
      setCurrentBoardId(currentBoardId);
    }
  };
  useEffect(() => {
    renderBoards();
  }, [boardIdList, currentBoardId]);
  return /* @__PURE__ */ React.createElement("div", {
    id: "sidebarDiv"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "header"
  }, /* @__PURE__ */ React.createElement("img", {
    src: stickyImg,
    className: "stickyNotes",
    id: "headerImage"
  }), /* @__PURE__ */ React.createElement("h2", {
    id: "headerText"
  }, "Quick Notes")), /* @__PURE__ */ React.createElement("div", {
    id: "addBoardBtn",
    onClick: handleNewBoard
  }, /* @__PURE__ */ React.createElement("img", {
    src: plusImg,
    id: "boardPlus"
  }), /* @__PURE__ */ React.createElement("p", null, "New Board")), /* @__PURE__ */ React.createElement("ul", {
    id: "boardList"
  }), /* @__PURE__ */ React.createElement("div", {
    id: "logoutBtn",
    onClick: (e) => handleLogout(e)
  }, /* @__PURE__ */ React.createElement("img", {
    src: gearImg,
    id: "gear"
  }), /* @__PURE__ */ React.createElement("h2", {
    style: {"margin-left": "10px"}
  }, "Log out")));
}
