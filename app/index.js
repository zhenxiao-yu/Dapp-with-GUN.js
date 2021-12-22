//create express app
const express = require("express");
const app = express();

//using gun
const Gun = require("gun");

//define port number
const port = 3000;
app.use(Gun.serve);

const server = app.listen(port, () => {
  console.log("Listening at: http://localhost://" + port);
});

Gun({ web: server });
