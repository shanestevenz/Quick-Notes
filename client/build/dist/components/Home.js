import React, {useState} from "../../_snowpack/pkg/react.js";
import Board from "../Board.js";
import Sidebar from "./Sidebar.js";
import {useEffect} from "../../_snowpack/pkg/react.js";
import {useNavigate} from "../../_snowpack/pkg/react-router-dom.js";
export default function Home() {
  const navigate = useNavigate();
  const getBoardIdList = (newNotes) => {
    let boardIdList2 = [];
    console.log("in getBoardIdList", newNotes);
    for (let note of newNotes) {
      console.log(note.boardId);
      if (boardIdList2.includes(note.boardId)) {
        continue;
      } else if (note.boardId != void 0) {
        boardIdList2.push(note.boardId);
      }
    }
    return boardIdList2.sort();
  };
  const addNote = (color) => {
    const newNote = {
      noteTitle: "",
      noteContent: "",
      noteColor: getColor(color),
      posX: 25,
      posY: 25,
      boardId: currentBoardId
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const saveNewNote = async (note) => {
    const res = await fetch("/notes/add", {
      method: "POST",
      body: JSON.stringify(note),
      headers: {"Content-Type": "application/json"}
    });
    return res;
  };
  const editNote = async (note) => {
    const res = await fetch("/notes/edit", {
      method: "POST",
      body: JSON.stringify(note),
      headers: {"Content-Type": "application/json"}
    });
    return res;
  };
  const getAllNotes = async () => {
    const notesResponse = await fetch("/notes", {
      method: "GET"
    });
    if (notesResponse.ok) {
      const newNotes = await notesResponse.json();
      console.log("in getAllNotes", newNotes);
      setNotes(newNotes);
      setBoardIdList(getBoardIdList(newNotes));
    } else {
      console.log("Failed get all notes, no auth");
      sessionStorage.setItem("loggedIn", "false");
      navigate("/", {replace: true});
    }
  };
  const deleteNote = (id) => {
    console.log("DELETEING STICKY NOTE");
    const json = {noteId: id, boardId: currentBoardId}, body = JSON.stringify(json);
    fetch("/notes/delete", {
      method: "POST",
      body,
      headers: {"Content-Type": "application/json"}
    }).then(function(response) {
      if (response.ok) {
        const newNotes = notes.filter((note) => note._id !== id);
        setNotes(newNotes);
      } else {
        console.log("Failed to delete note with id:", id);
      }
    });
  };
  const getColor = (color) => {
    let hexcode = "#89EBB6";
    switch (color) {
      case "red":
        hexcode = "#FB9D9D";
        break;
      case "blue":
        hexcode = "#89B0EB";
        break;
      case "green":
        hexcode = "#89EBB6";
        break;
      case "yellow":
        hexcode = "#FFF495";
        break;
      case "purple":
        hexcode = "#E989EB";
        break;
      default:
        hexcode = "#89EBB6";
    }
    return hexcode;
  };
  useEffect(() => {
    getAllNotes();
  }, []);
  const [notes, setNotes] = useState([]);
  const [currentBoardId, setCurrentBoardId] = useState(1);
  const [boardIdList, setBoardIdList] = useState([]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "home-wrapper"
  }, console.log("In <Home>"), /* @__PURE__ */ React.createElement(Sidebar, {
    boardIdList,
    setBoardIdList,
    currentBoardId,
    setCurrentBoardId
  }), /* @__PURE__ */ React.createElement(Board, {
    notes,
    handleAddNote: addNote,
    handleDeleteNote: deleteNote,
    currentBoardId,
    handleSaveNewNote: saveNewNote,
    handleEditNote: editNote
  }));
}
