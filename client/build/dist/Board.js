import React from "../_snowpack/pkg/react.js";
import AddNoteBar from "./components/AddNoteBar.js";
import Note from "./components/Note.js";
export default function Board({
  notes,
  handleAddNote,
  handleDeleteNote,
  currentBoardId,
  handleSaveNewNote,
  handleEditNote
}) {
  const filterNotesByBoardId = (item) => {
    if (item.boardId == currentBoardId) {
      return true;
    } else {
      return false;
    }
  };
  function getFilteredNotes() {
    console.log("getFilteredNotes(): currentboard ID: " + currentBoardId);
    let filteredNotes = [];
    for (let index in notes) {
      if (filterNotesByBoardId(notes[index])) {
        filteredNotes.push(notes[index]);
      }
    }
    return filteredNotes;
  }
  return /* @__PURE__ */ React.createElement("div", {
    className: "board-wrapper"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "board"
  }, getFilteredNotes().map((note) => /* @__PURE__ */ React.createElement(Note, {
    key: note._id,
    id: note._id,
    title: note.noteTitle,
    content: note.noteContent,
    color: note.noteColor,
    posX: note.posX,
    posY: note.posY,
    boardId: currentBoardId,
    deleteNote: handleDeleteNote,
    saveNote: handleSaveNewNote,
    editNote: handleEditNote
  }))), /* @__PURE__ */ React.createElement(AddNoteBar, {
    handleAddNote
  }));
}
