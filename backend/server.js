const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const videoRoutes = require("./routes/videoRoutes");
const bookmarkRoutes = require("./routes/bookmarkRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/videos", videoRoutes);
app.use("/api/bookmarks", bookmarkRoutes);

app.get("/", (req, res) => {
    res.send("Learning Portal API");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});