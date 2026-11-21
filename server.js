import express from "express";
import fs from "fs";
import multer from "multer"

const app = express();
// const router = express.Router();

app.use(express.static("public"));

const storage = multer.diskStorage({
  destination: "./uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

app.get("/", (req, res) => {
  fs.readFile("public/index.html", "utf-8", (erro, conteudo) => {
    if (erro){return;}
    res.send(conteudo)
  })
});

app.post("/upload", upload.single("arquivo"), (req, res) => {
  res.redirect("/")
});

app.listen(3000, () => {
  console.log("Running in http://localhost:3000");
});