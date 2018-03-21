module.exports = (app) => {
  app.post('/create', (req, res) => {
    let games = app.locals.db.collection('games');
    let currentGame = req.body.game;
    let gameTitle = currentGame.gameTitle;

    games.findOne({gameTitle: gameTitle}, (err, r) => {
      if ( r === null ) {
        postToDB();
      } else {
        let newRatings = r.gameRating.concat(currentGame.gameRating);
        let obj = {
          $set: {
            gameRating: newRatings
          }
        }
        updateGame(obj);
      }
    });

    const postToDB = () => {
      games.insertOne(currentGame, (err, r) => {
        if (err) {
          console.log(err);
        }
        console.log(`Successfully added ${gameTitle} to the DB!`);
      });
    }

    const updateGame = (updateObj) => {
      games.updateOne({gameTitle: gameTitle}, updateObj, (err, r) => {
        if (err) {
          console.log(err);
        } else {
          console.log("Successfully added rating!");
        }
      });
    }

  });
};
