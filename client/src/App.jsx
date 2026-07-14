import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import WatchVideo from "./pages/WatchVideo";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video/:id" element={<WatchVideo />} />
        </Routes>
    );
}

export default App;