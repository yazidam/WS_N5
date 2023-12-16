const fs = require("fs");

const fetchData = () => {
  try {
    return JSON.parse(fs.readFileSync("notes.txt"));
  } catch (error) {
    console.log("error", error);
    return [];
  }
};

const logNot = (note) => {
  console.log(`note title: ${note.title}`);
  console.log(`note body: ${note.body}`);
};

const getAll = () => {
  let notes = fetchData();
  notes.forEach((element) => {
    logNot(element);
  });
};

const addNote = (title, body) => {
  let notes = fetchData();
  let note = { title, body };

  const existe = notes.filter((note) => note.title === title);
  console.log("existe", existe);
  console.log("existe.length", existe.length);
  if (existe.length === 0) {
    notes.push(note);
    fs.writeFileSync("notes.txt", JSON.stringify(notes));
    logNot(note);
  } else {
    console.log("note alreday existe");
  }
};

const getOneNote = (title) => {
  let notes = fetchData();
  const res = notes.find((note) => note.title == title);
  console.log(res);
};

const removeNote = (title) => {
  let notes = fetchData();
  const res = notes.find((note) => note.title !== title);
  fs.writeFileSync("notes.txt", JSON.stringify(res));
  logNot(res);
};

module.exports = {
  addNote,
  getAll,
  removeNote,
  getOneNote,
};
