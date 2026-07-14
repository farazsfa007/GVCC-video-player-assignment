import { useEffect, useRef } from "react";
import  ReactPlayer  from "react-player";

function VideoPlayer({
  url,
  currentTime,
  onTimeUpdate,
  onPlayerReady,
}) {
  const playerRef = useRef(null);

  // Give the parent access to the player instance
  useEffect(() => {
    if (playerRef.current && onPlayerReady) {
      onPlayerReady(playerRef.current);
    }
  }, [onPlayerReady]);

  return (
    <ReactPlayer
      ref={playerRef}
      src={url}
      controls
      width="100%"
      height="500px"
      playing={false}
      onTimeUpdate={(event) => {
        onTimeUpdate(event.currentTarget.currentTime);
      }}
      onReady={() => {
        if (playerRef.current) {
          playerRef.current.currentTime = currentTime;
        }
      }}
    />
  );
}

export default VideoPlayer;