const Video = require("../models/Video");

const getVideos = async (req, res) => {
    try {
        const videos = await Video.find();

        res.json(videos);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getVideo = async (req, res) => {
    try {
        const video = await Video.findById(req.params.id);

        if (!video) {
            return res.status(404).json({
                message: "Video not found"
            });
        }

        res.json(video);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    getVideos,
    getVideo
};