# 🐒 Violent Fire

<p align="center">
  <img src="public/img/icons/logo.svg" width="120" alt="Violent Monkey Logo">
</p>

<h1 align="center">Violent Fire</h1>

<p align="center">
  A lightweight, self-hosted file storage server.
</p>

<p align="center">
  Store and manage your files directly on your own server.
</p>

---

## 📖 About

**Violent Fire** is a simple, self-hosted file storage system built with Node.js and Express.

It provides a straightforward way to upload and store files through a web interface, using your own server's storage instead of relying on external cloud storage services.

The goal is to give users control over their files, their storage, and their infrastructure.

## ✨ Features

- 📤 Upload files through a simple web interface.
- 💾 Store files directly on your server.
- 📁 Keep uploaded files organized in a dedicated directory.
- ⚡ Lightweight and easy to set up.
- 🔧 Built with Node.js and Express.
- 📦 Uses Multer for file upload handling.
- 🖥️ Self-hosted storage with no external cloud storage dependency.
- ⚙️ Configurable server settings through settings.json.
- 📏 Customizable maximum file upload size.

## 💾 Storage

All uploaded files are stored locally in the `uploads/` directory by default.

This means your files remain on the machine hosting the Violent Fire server, giving you direct control over your storage.

You can customize the storage directory through the `upload_folder` property in `settings.json`.

**Important:** Uploaded files are stored on the server's disk. Make sure to create regular backups to prevent data loss.

## 🛠️ Technologies

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Multer](https://github.com/expressjs/multer)
- HTML
- [Tailwind CSS](https://tailwindcss.com/)
- [Yarn](https://yarnpkg.com/)

## 🚀 Getting Started

### Prerequisites

- [Node.js and NPM](https://nodejs.org/)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/)
- [Git](https://git-scm.com/install/)

### Installation

```bash
git clone https://github.com/matheuspessole/violentfire.git
cd violentfire
yarn install
yarn start
```

Open **http://localhost:3000** in your browser.

## ⚡ Quick Install

Run everything with one command:

```bash
git clone https://github.com/matheuspessole/violentfire.git && cd violentfire && yarn install && yarn start
```

## ⚙️ Configuration

Violent Fire uses a `settings.json` file in the project root.

### Default settings.json

Create the file if it doesn't exist:

```json
{
  "port": 3000,
  "upload_folder": "uploads",
  "max_file_size_mb": 100
}
```

| Property | Description | Default |
|---|---|---|
| `port` | Server port. | `3000` |
| `upload_folder` | File storage directory. | `uploads` |
| `max_file_size_mb` | Maximum upload size per file (MB). | `100` |

**Port:** Use ports above `1023` to avoid requiring administrator/root privileges on most Unix-like systems. Ports below `1024` are privileged.

**Upload folder:** Defines where uploaded files are stored. Ensure the server has permission to write to the directory.

**Maximum file size:** Sets the upload limit in megabytes. For example, `250` allows files up to 250 MB.

After changing the settings, restart the server if necessary.

## 📂 Project Structure

```text
violentfire/
├── public/
│   ├── img/
│   ├── index.html
│   └── ...
├── uploads/
├── server.js
├── settings.json
├── package.json
└── yarn.lock
```

## 🔒 License

Violent Fire is licensed under the **PolyForm Noncommercial License 1.0.0**.

You are allowed to use, study, modify, and share this software for noncommercial purposes, subject to the license terms.

Commercial use is not permitted without separate authorization.

See the [LICENSE](LICENSE) file for the complete license terms.

---

<p align="center">
  Your server. Your storage. Your files.
</p>

<p align="center">
  Made with 🔥 by Matthew.
</p>