import React from "../../_snowpack/pkg/react.js";
export default function AddNoteBar({handleAddNote}) {
  const handleAddNote_Green = (event) => {
    console.log("CLicked Green BTN " + event);
    handleAddNote("green");
  };
  const handleAddNote_Blue = (event) => {
    console.log("CLicked Blue BTN " + event);
    handleAddNote("blue");
  };
  const handleAddNote_Purple = (event) => {
    console.log("CLicked Purple BTN " + event);
    handleAddNote("purple");
  };
  const handleAddNote_Red = (event) => {
    console.log("CLicked Red BTN " + event);
    handleAddNote("red");
  };
  const handleAddNote_Yellow = (event) => {
    console.log("CLicked Yellow BTN " + event);
    handleAddNote("yellow");
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "AddNoteBar-container"
  }, /* @__PURE__ */ React.createElement("input", {
    className: "green-Note",
    type: "image",
    src: "/ic_StickyNote_Solid_Plus_black.png",
    onClick: handleAddNote_Green
  }), /* @__PURE__ */ React.createElement("input", {
    className: "blue-Note",
    type: "image",
    src: "/ic_StickyNote_Solid_Plus_black.png",
    onClick: handleAddNote_Blue
  }), /* @__PURE__ */ React.createElement("input", {
    className: "purple-Note",
    type: "image",
    src: "/ic_StickyNote_Solid_Plus_black.png",
    onClick: handleAddNote_Purple
  }), /* @__PURE__ */ React.createElement("input", {
    className: "red-Note",
    type: "image",
    src: "/ic_StickyNote_Solid_Plus_black.png",
    onClick: handleAddNote_Red
  }), /* @__PURE__ */ React.createElement("input", {
    className: "yellow-Note",
    type: "image",
    src: "/ic_StickyNote_Solid_Plus_black.png",
    onClick: handleAddNote_Yellow
  }));
}
