# GVCC Learning Portal - Video Player Assignment

A full-stack Learning Portal developed as part of the **GVCC Learning Portal Development Assessment**. The application allows students to watch learning videos, create multiple bookmarks for each video, and resume playback from saved timestamps.

**GitHub Repository:** [GVCC-video-player-assignment](https://github.com/farazsfa007/GVCC-video-player-assignment.com)
**Deploy Link:** [Live Link](https://gvcc-video-player.netlify.app/)

---

## Features

* Browse available learning videos
* Watch videos using React Player
* Create multiple bookmarks for a single video
* Optional bookmark names
* Resume video playback from any saved bookmark
* Persistent bookmark storage using MongoDB
* RESTful API built with Express.js
* Responsive user interface
* Screenshot deterrence using browser-based techniques

  * Disable right-click
  * Disable common developer shortcuts
  * Blur page when browser loses focus
  * Watermark overlay

---

## Tech Stack

### Frontend

* React
* React Router DOM
* Axios
* React Player
* CSS

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* dotenv
* CORS

---

## Project Structure

```text
learning-portal/

├── backend/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env
│   ├── package.json
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
│
└── README.md
```

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/farazsfa007/GVCC-video-player-assignment.git

cd GVCC-video-player-assignment
```

---

## Backend Setup

Navigate to the backend folder.

```bash
cd backend
```

Install dependencies.

```bash
npm install
```

Create a `.env` file.

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Start the backend server.

```bash
npm run dev
```

The backend will run on:

```
http://localhost:5000
```

---

## Frontend Setup

Open another terminal.

```bash
cd frontend
```

Install dependencies.

```bash
npm install
```

Start the React development server.

```bash
npm run dev
```

Open:

```
http://localhost:5173
```

---

## MongoDB

Create a MongoDB database named:

```
learningPortal
```

Example collections:

```
videos
bookmarks
```

Example video document:

```json
{
  "title": "React Basics",
  "description": "Introduction to React",
  "videoUrl": "https://www.youtube.com/watch?v=bMknfKXIFA8",
  "thumbnail": "https://img.youtube.com/vi/bMknfKXIFA8/maxresdefault.jpg"
}
```

---

## API Endpoints

### Videos

| Method | Endpoint          | Description        |
| ------ | ----------------- | ------------------ |
| GET    | `/api/videos`     | Get all videos     |
| GET    | `/api/videos/:id` | Get a single video |

### Bookmarks

| Method | Endpoint                  | Description                   |
| ------ | ------------------------- | ----------------------------- |
| GET    | `/api/bookmarks/:videoId` | Get all bookmarks for a video |
| POST   | `/api/bookmarks`          | Create a bookmark             |
| DELETE | `/api/bookmarks/:id`      | Delete a bookmark             |

---

## Bookmark Object

```json
{
  "videoId": "VIDEO_ID",
  "name": "Important Topic",
  "timestamp": 125
}
```

---

## Screenshot Protection

Complete screenshot prevention is not possible in web browsers because browsers do not expose APIs to block operating system screenshots. This project implements practical deterrents instead:

* Disable right-click
* Disable common developer shortcuts
* Blur the page when the browser loses focus
* Display a watermark while watching videos

These measures discourage screenshots but cannot completely prevent them.

---

## Testing

The application was tested for the following functionality:

* Display all videos
* Play learning videos
* Create multiple bookmarks
* Store bookmarks in MongoDB
* Retrieve bookmarks
* Resume playback from saved timestamps
* Responsive layout
* Backend API integration

---

## Future Improvements

* User authentication
* Continue Watching
* Watch history
* Progress tracking
* Bookmark editing
* Bookmark deletion from the user interface
* Admin dashboard for video management
* Video upload functionality

---

## Author

**Syed Faraz Ahmad**

GitHub: [@farazsfa007](https://github.com/farazsfa007)

---

## Assignment Checklist

* MERN Stack
* Learning Portal
* Video Player
* Multiple Bookmarks
* Resume Playback
* Persistent MongoDB Storage
* Student-Friendly UI
* REST API
* Screenshot Deterrence
* README Documentation

---
