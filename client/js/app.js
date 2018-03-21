import axios from 'axios';
import '../app.min.css';

let theTarget = document.getElementsByClassName("add-game");
let theInput = document.getElementsByClassName("game-title");

const createNew = (gameTitle, gameRating) => {
  const postGame = axios({
    method: "post",
    url: `http://localhost:3000/create`,
    responseType: "json",
    data: {
      game: {
        gameTitle: gameTitle,
        gameRating: [gameRating]
      }
    }
  });

  postGame.then((response) => {
    console.log(response);
  })
};

const handleClick = () => {
  let titleVal = theInput[0].value;
  let ratingVal = theInput[1].value;

  console.log(titleVal, ratingVal);
  createNew(titleVal, ratingVal);
};

theTarget[0].addEventListener('click', handleClick);
