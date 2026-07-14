const express = require("express");

const router = express.Router();

const {
    getVideos,
    getVideo
} = require("../controllers/videoController");

router.get("/", getVideos);

router.get("/:id", getVideo);

module.exports = router;