import { useState } from "react";

export default function BlogForm({
  handleCreateBlog,
  newTitle,
  newAuthor,
  newUrl,
  setNewTitle,
  setNewAuthor,
  setNewUrl,
}) {
  const [blogFormVisible, setBLogFormVisible] = useState(false);

  const hideWhenVisible = { display: blogFormVisible ? "none" : "" };
  const showWhenVisible = { display: blogFormVisible ? "" : "none" };

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={() => setBLogFormVisible(true)}>Create Blog</button>
      </div>
      <div style={showWhenVisible}>
        <form onSubmit={handleCreateBlog}>
          <div>
            title
            <input
              type="text"
              value={newTitle}
              name="title"
              onChange={({ target }) => setNewTitle(target.value)}
            />
          </div>
          <div>
            author
            <input
              type="text"
              value={newAuthor}
              name="author"
              onChange={({ target }) => setNewAuthor(target.value)}
            />
          </div>
          <div>
            url
            <input
              type="text"
              value={newUrl}
              name="url"
              onChange={({ target }) => setNewUrl(target.value)}
            />
          </div>
          <button type="submit">Create</button>
        </form>
       
          <button onClick={() => setBLogFormVisible(false)}>Cancel</button>
        
      </div>
    </div>
  );
}
