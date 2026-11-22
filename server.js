import express from "express";
import fs from "fs";
import path from "path";
import multer from "multer"

import settings from "./settings.json" with { type: "json" };

const app = express();
// const router = express.Router();

app.use(express.static("public"));

const storage = multer.diskStorage({
  destination: `./${settings.upload_folder}`,
  filename: (req, file, cb) => {
    cb(null, path.basename(file.originalname));
  }
});

const upload = multer({
  storage,
  limits: {
    fileSize: settings.max_file_size_mb * 1024 * 1024
  }
});

app.get("/", (req, res) => {
  fs.readFile("public/index.html", "utf-8", (erro, conteudo) => {
    if (erro){return;}
    res.send(conteudo)
  })
});

app.post("/upload", upload.single("arquivo"), (req, res) => {
  res.redirect("/")
});

app.listen(settings.port, () => {
  console.log(`Running in http://localhost:${settings.port}`);
});