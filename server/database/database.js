const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/imagegallery")
  .then(() => {
    console.log("CONNECTED");
  })
  .catch((e) => {
    console.log(e);
  });
