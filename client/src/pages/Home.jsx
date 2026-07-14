import { useEffect, useState } from "react";

import api from "../services/api";
import Navbar from "../components/Navbar";
import VideoCard from "../components/VideoCard";

function Home() {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        loadVideos();
    }, []);

    const loadVideos = async () => {
        try {
            const res = await api.get("/videos");
            setVideos(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <Navbar />

            <div className="container">

                <h2>Available Courses</h2>

                <div className="video-grid">

                    {videos.map((video) => (
                        <VideoCard
                            key={video._id}
                            video={video}
                        />
                    ))}

                </div>

            </div>
        </>
    );
}

export default Home;