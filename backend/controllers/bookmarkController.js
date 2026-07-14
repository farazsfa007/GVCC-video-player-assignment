const Bookmark = require("../models/Bookmark");

const getBookmarks = async (req, res) => {
    try {
        const bookmarks = await Bookmark.find({
            videoId: req.params.videoId
        }).sort({ timestamp: 1 });

        res.json(bookmarks);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const addBookmark = async (req, res) => {
    try {
        const { videoId, name, timestamp } = req.body;

        const bookmark = await Bookmark.create({
            videoId,
            name,
            timestamp
        });

        res.status(201).json(bookmark);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const deleteBookmark = async (req, res) => {
    try {
        await Bookmark.findByIdAndDelete(req.params.id);

        res.json({
            message: "Bookmark deleted"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getBookmarks,
    addBookmark,
    deleteBookmark
};