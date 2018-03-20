import axios from 'axios';
import '../app.min.css';

let theTarget = document.getElementsByClassName("noteButton");
let theInput = document.getElementsByClassName("noteInput");
let theTextArea = document.getElementById("note-body");

const createNew = (noteTitle, noteBody) => {
  const notePost = axios({
    method: "post",
    url: `http://localhost:3000/create`,
    responseType: "json",
    data: {
      noteTitle: noteTitle,
      noteBody: noteBody
    }
  });

  notePost.then((response) => {
    console.log(response);
  })
};

const handleClick = () => {
  let titleVal = theInput[0].value;
  let bodyVal = theTextArea.value;

  console.log(titleVal, bodyVal);
  createNew(titleVal, bodyVal);
};

theTarget[0].addEventListener('click', handleClick);
