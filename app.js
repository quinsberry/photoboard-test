const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const dotenv = require("dotenv");

dotenv.config();

const { ImagesCtrl, BoardsCtrl } = require("./controllers");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.get("/api/images/board/:name", ImagesCtrl.addTags);
app.delete("/api/images/board/:name", ImagesCtrl.removeAllTags);
app.get("/api/images/board", ImagesCtrl.showBoard);
app.get("/api/images", ImagesCtrl.all);
app.post("/api/images", ImagesCtrl.create);
app.post("/api/images/array", ImagesCtrl.addArray);

app.get("/api/boards", BoardsCtrl.all);
app.get("/api/boards/:id", BoardsCtrl.show);
app.post("/api/boards", BoardsCtrl.create);

if (process.env.NODE_ENV === "production") {
  app.use(
    "/",
    express.static(path.join(__dirname, "client", "dist", "client"))
  );

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "client", "dist", "client", "index.html")
    );
  });
}

const PORT = process.env.PORT || 3001;
async function start() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    app.listen(PORT, () => {
      console.log(`Server has been started on port ${PORT}..`);
    });
  } catch (e) {
    console.log(`Server Error: ${e.message}`);
    process.exit(1);
  }
}

start();
