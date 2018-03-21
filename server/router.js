// const addGame = (app) => {
//   app.post('/create', (req, res) => {
//     db.collecttion('games').insertOne(req.body.game, (err, r) => {
//       if (err) {
//         console.log(err);
//       }
//       console.log(`Added ${req.body.game.gameTitle} to the DB!`);
//     });
//   });
// }
//
// module.exports = {
//   addGame
// }

module.exports = function(app, db) {
  app.post('/create', (req, res) => {
    app.locals.db.collection('games').insertOne(req.body.game, (err, r) => {
      if (err) {
        console.log(err);
      }
      console.log(`Added ${req.body.game.gameTitle} to the DB!`);
    });
  });
};
