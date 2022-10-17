import React from "react";
import AddNoteBar from "./components/AddNoteBar.js";
import Note from "./components/Note.js";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
export default function Board({
  id,
  title,
  notes,
  handleAddNote,
  handleDeleteNote
}) {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(DragDropContext, null, /* @__PURE__ */ React.createElement(Droppable, {
    droppableId: "note"
  }, (provided) => /* @__PURE__ */ React.createElement("div", {
    className: "board",
    ...provided.droppableProps,
    ref: provided.innerRef
  }, notes.map((note, index) => /* @__PURE__ */ React.createElement(Draggable, {
    key: note.id,
    draggableId: note.id,
    index
  }, (provided2) => /* @__PURE__ */ React.createElement(Note, {
    key: note.id,
    id: note.id,
    title: note.title,
    content: note.content,
    color: note.color,
    date: note.date,
    posX: note.posX,
    posY: note.posY,
    deleteNote: handleDeleteNote,
    ref: provided2.innerRef,
    ...provided2.draggableProps,
    ...provided2.dragHandleProps
  }))), provided.placeholder))), /* @__PURE__ */ React.createElement(AddNoteBar, {
    handleAddNote
  }));
}
