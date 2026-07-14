import axios from "axios";

const api = axios.create({
    baseURL: "https://gvcc-video-player-assignment.onrender.com/api"
});

export default api;