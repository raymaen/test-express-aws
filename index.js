const express = require("express");
const app = express();
const port = 3000;

let sendStr = "init";
if (process.env.NODE_ENV === "production") {
  sendStr = "prod";
} else {
  sendStr = "dev";
}

app.get("/", (req, res) => res.send("Hello World!" + sendStr));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
