import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../services/api";
import Navbar from "../components/Navbar";
import VideoPlayer from "../components/VideoPlayer";
import BookmarkForm from "../components/BookmarkForm";
import BookmarkList from "../components/BookmarkList";

function WatchVideo() {
    const { id } = useParams();

    const [video, setVideo] = useState(null);
    const [bookmarks, setBookmarks] = useState([]);

    const [player, setPlayer] = useState(null);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        loadVideo();
        loadBookmarks();
    }, []);

    const loadVideo = async () => {
        try {
            const res = await api.get(`/videos/${id}`);
            setVideo(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const loadBookmarks = async () => {
        try {
            const res = await api.get(`/bookmarks/${id}`);
            setBookmarks(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    const saveBookmark = async (name) => {
        try {
            await api.post("/bookmarks", {
                videoId: id,
                name,
                timestamp: Math.floor(currentTime)
            });

            loadBookmarks();
        } catch (error) {
            console.log(error);
        }
    };

    const jumpToBookmark = (time) => {
        if (!player) return;

        player.currentTime = time;

        player.play().catch(() => {
            // Browser blocks autoplay until user interacts.
            // The video will start when the user presses Play.
        });
    };

    if (!video) {
        return <h2>Loading...</h2>;
    }

    return (
        <>
            <Navbar />

            <div className="container">

                <h2>{video.title}</h2>

                <VideoPlayer
                    url={video.videoUrl}
                    currentTime={0}
                    onTimeUpdate={setCurrentTime}
                    onPlayerReady={setPlayer}
                />

                <p>{video.description}</p>

                <BookmarkForm
                    onSave={saveBookmark}
                />

                <BookmarkList
                    bookmarks={bookmarks}
                    onSelect={jumpToBookmark}
                />

            </div>
        </>
    );
}

export default WatchVideo;