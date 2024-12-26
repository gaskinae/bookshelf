import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import BookShelf from './components/BookShelf'; // Import Bookshelf component
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<BookShelf />} /> {/* Updated to use 'element' */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
