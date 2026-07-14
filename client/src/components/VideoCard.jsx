import { Link } from "react-router-dom";

function VideoCard({ video }) {
    return (
        <div className="video-card">
            <img src={video.thumbnail} alt={video.title} />

            <h3>{video.title}</h3>

            <p>{video.description}</p>

            <Link to={`/video/${video._id}`}>
                Watch Video
            </Link>
        </div>
    );
}

export default VideoCard;