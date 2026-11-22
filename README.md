
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

## 💾 Storage

All uploaded files are stored locally in the `uploads/` directory.

This means your files remain on the machine hosting the Violent Monkey server, giving you direct control over your storage.

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

Before installing Violent Fire, make sure you have:

- **Node.js and NPM:** https://nodejs.org/
- **Yarn:** https://classic.yarnpkg.com/lang/en/docs/install/
- **Git:** https://git-scm.com/install/

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/matheuspessole/violentfire.git
```

**2. Navigate to the project directory**

```bash
cd violentfire
```

**3. Install dependencies**

```bash
yarn install
```

**4. Start the server**

```bash
yarn start
```

**5. Open Violent Fire**

Access the following address in your browser:

```text
http://localhost:3000
```

That's it! Your Violent Fire server is running.

## 📂 Project Structure

```text
violentfire/
├── public/
│   ├── img/
│   │   └── icons/
│   ├── index.html
│   └── ...
├── uploads/
├── server.js
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
