const express = require("express");

const router = express.Router();

const {
    getBookmarks,
    addBookmark,
    deleteBookmark
} = require("../controllers/bookmarkController");

router.get("/:videoId", getBookmarks);

router.post("/", addBookmark);

router.delete("/:id", deleteBookmark);

module.exports = router;