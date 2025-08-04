// src/App.jsx
import { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [view, setView] = useState('book');

  return (
    <div style={{ padding: '20px' }}>
      <h1>Blogger App Dashboard</h1>
      <div>
        <button onClick={() => setView('book')}>Show Books</button>
        <button onClick={() => setView('blog')}>Show Blogs</button>
        <button onClick={() => setView('course')}>Show Courses</button>
      </div>

      {/* Conditional Rendering */}
      {view === 'book' && <BookDetails />}
      {view === 'blog' && <BlogDetails />}
      {view === 'course' && <CourseDetails />}
    </div>
  );
}

export default App;
