import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const BlogForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform local validations
    if (title.trim() === '') {
      alert('Please enter a title.');
      return;
    }

    if (description.trim() === '') {
      alert('Please enter a description.');
      return;
    }

    if (content.trim() === '') {
      alert('Please enter some content.');
      return;
    }

    // Form is valid, you can submit the data to the server here
    console.log('Title: ', title);
    console.log('Description: ', description);
    console.log('Content: ', content);

    // Reset form fields
    setTitle('');
    setDescription('');
    setContent('');
  };

  return (
    <div className="container">
      <h1>Create a Blog</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <label htmlFor="description">Description:</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <label htmlFor="content">Content:</label>
        <ReactQuill
          id="content"
          value={content}
          onChange={setContent}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BlogForm;
