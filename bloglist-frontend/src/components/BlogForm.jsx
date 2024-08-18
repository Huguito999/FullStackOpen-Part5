export default function BlogForm({
  handleCreateBlog,
  newTitle,
  newAuthor,
  newUrl,
  setNewTitle,
  setNewAuthor,
  setNewUrl,
}) {
  return (
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
  );
}
