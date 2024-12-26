import React, { useState, useEffect } from 'react';
import  Vibrant from 'node-vibrant';
import './BookCard.css';

const BookCard = ({ title, author, coverImage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [notes, setNotes] = useState('');
  const [spineColor, setSpineColor] = useState('#333');

  useEffect(() => {
    if (coverImage) {
      const extractColor = async () => {
        try {
          const palette = await Vibrant.from(coverImage).getPalette();
          setSpineColor(palette.DarkMuted?.hex || '#333');
        } catch (err) {
          console.error('Error extracting color:', err);
        }
      };
      extractColor();
    }
  }, [coverImage]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleNotesClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={`book-card ${isOpen ? 'open' : ''}`} onClick={handleClick}>
      <div className="book-spine" style={{ '--spine-color': spineColor }}>
        {title}
      </div>
      <div className="book-cover" style={{ backgroundImage: `url(${coverImage})` }} />
      <div className="book-content" onClick={handleNotesClick}>
        <h3>{title}</h3>
        <h4>{author}</h4>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add your notes here..."
        />
      </div>
    </div>
  );
};

export default BookCard;