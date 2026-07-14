function formatTime(seconds) {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);

  if (hrs > 0) {
    return `${hrs}:${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  }

  return `${mins}:${secs.toString().padStart(2, "0")}`;
}

function BookmarkList({ bookmarks, onSelect }) {
  return (
    <div className="bookmark-list">
      <h3>Bookmarks</h3>

      {bookmarks.length === 0 ? (
        <p>No bookmarks added yet.</p>
      ) : (
        bookmarks.map((bookmark) => (
          <div
            key={bookmark._id}
            className="bookmark-item"
          >
            <div>
              <strong>
                {bookmark.name || "Untitled Bookmark"}
              </strong>

              <p>{formatTime(bookmark.timestamp)}</p>
            </div>

            <button
              onClick={() => onSelect(bookmark.timestamp)}
            >
              Resume
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default BookmarkList;