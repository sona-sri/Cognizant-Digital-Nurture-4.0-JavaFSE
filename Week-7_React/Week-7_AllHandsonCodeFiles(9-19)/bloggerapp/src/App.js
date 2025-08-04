
import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';
import { books, blogs, courses } from './data';

import './App.css';

function App() {
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);
  const [showCourses, setShowCourses] = useState(true);

  return (
    <div className="container">
      <div className="buttons">
        <button onClick={() => setShowBooks(!showBooks)}>Toggle Books</button>
        <button onClick={() => setShowBlogs(!showBlogs)}>Toggle Blogs</button>
        <button onClick={() => setShowCourses(!showCourses)}>Toggle Courses</button>
      </div>

      <div className="box">
        {showBooks && (
          <div className="section">
            <BookDetails books={books} />
          </div>
        )}
        {showBlogs && (
          <div className="section">
            <BlogDetails blogs={blogs} />
          </div>
        )}
        {showCourses && (
          <div className="section">
            <CourseDetails courses={courses} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
