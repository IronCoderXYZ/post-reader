// NPM Imports
import React from 'react';
// Local Imports
import Post from './Post';

export default ({ posts }) => (
  posts.map(({
    id, author, date, title, content, excerpt, link,
  }) => (
    <Post
      key={id}
      date={date}
      link={link}
      title={title}
      author={author}
      content={content}
      excerpt={excerpt}
    />
  ))
);
