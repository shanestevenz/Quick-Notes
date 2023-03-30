import React, {useState, useEffect, useRef} from "../../_snowpack/pkg/react.js";
import TextareaAutosize from "../../_snowpack/pkg/react-textarea-autosize.js";
export default function Note({
  id,
  title,
  content,
  color,
  posX,
  posY,
  boardId,
  deleteNote,
  saveNote,
  editNote
}) {
  const [noteContent, setNoteContent] = useState(content);
  const [noteTitle, setNoteTitle] = useState(title);
  const characterLimit = 200;
  const showSaveButton = () => {
    if (id == null) {
      document.getElementsByClassName("save-button-visibility-temp").item(0).classList.remove("hidden");
    } else {
      document.getElementsByClassName("save-button-visibility-" + id).item(0).classList.remove("hidden");
    }
  };
  const handleNoteChange = (event) => {
    showSaveButton();
    if (characterLimit - event.target.value.length >= 0) {
      setNoteContent(event.target.value);
      console.log("Setting Note Text");
    }
  };
  const handleNoteTitleChange = (event) => {
    showSaveButton();
    setNoteTitle(event.target.value);
    console.log("Setting Note TITLE");
  };
  const handleDeleteNote = (event) => {
    console.log("Delete Note Clicked!");
    deleteNote(id);
  };
  const handleSaveNote = () => {
    console.log("Save Note Clicked!");
    const note = {
      noteTitle,
      noteContent,
      noteColor: color,
      posX,
      poxY: posY,
      boardId
    };
    if (id == null) {
      console.log("ID is null in note, calling /notes/add");
      document.getElementsByClassName("save-button-visibility-temp").item(0).classList.add("hidden");
      document.getElementsByClassName("save-button-visibility-temp").item(0).classList.remove("save-button-visibility-temp");
      saveNote(note);
    } else {
      console.log("ID is not null in notes, calling /notes/edit");
      document.getElementsByClassName("save-button-visibility-" + id).item(0).classList.add("hidden");
      note._id = id;
      editNote(note);
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "note",
    style: {backgroundColor: color}
  }, /* @__PURE__ */ React.createElement("div", {
    className: "note-header"
  }, /* @__PURE__ */ React.createElement("input", {
    type: "text",
    className: "note-title",
    value: noteTitle,
    onChange: handleNoteTitleChange
  }), /* @__PURE__ */ React.createElement("input", {
    className: id == null ? "save-btn hidden save-button-visibility-temp" : "save-btn hidden save-button-visibility-" + id,
    type: "image",
    src: "/twotone_save_black_24dp.png",
    onClick: handleSaveNote
  }), /* @__PURE__ */ React.createElement("input", {
    className: "delete-btn",
    type: "image",
    src: "/twotone_cancel_black_24dp.png",
    onClick: handleDeleteNote
  })), /* @__PURE__ */ React.createElement("hr", {
    className: "note-line"
  }), /* @__PURE__ */ React.createElement("div", {
    className: "note-content"
  }, /* @__PURE__ */ React.createElement(TextareaAutosize, {
    minRows: "8",
    className: "note-text-area",
    cols: "10",
    placeholder: "Type to add a note...",
    value: noteContent,
    onChange: handleNoteChange
  })));
}
