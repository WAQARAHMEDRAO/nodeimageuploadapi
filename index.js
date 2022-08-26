const express = require("express");
const app = express();
const port = process.env.port || "5000";
const hbs = require("hbs");
const path = require("path");
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "hbs");
require("./server/database/database");

app.get("/", require("./server/router/router"));
app.listen(port, () => {
  console.log(`APP IS LIXENING ON THE PORT ${port}`);
});
