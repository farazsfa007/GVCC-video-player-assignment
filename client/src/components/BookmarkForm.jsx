import { useState } from "react";

function BookmarkForm({ onSave }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave(name.trim());

    setName("");
  };

  return (
    <form className="bookmark-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Bookmark name (optional)"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button type="submit">
        Save Bookmark
      </button>
    </form>
  );
}

export default BookmarkForm;