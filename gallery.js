import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';

const Gallery = () => {
  const [searchTerm, setSearchTerm] = useState('cats'); // Default search term
  const [gifs, setGifs] = useState([]);

  useEffect(() => {
    // Fetch GIFs from GIPHY API when the component mounts or when searchTerm changes
    async function fetchGifs() {
      try {
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=YOUR_GIPHY_API_KEY&limit=10`
        );
        const data = await response.json();
        setGifs(data.data);
      } catch (error) {
        console.error('Error fetching GIFs:', error);
      }
    }

    fetchGifs();
  }, [searchTerm]);

  return (
    <div>
      <h2>GIF Gallery</h2>
      <input
        type="text"
        placeholder="Search GIFs"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="gallery">
        {gifs.map((gif) => (
          <div key={gif.id} className="gif-item">
            <img src={gif.images.fixed_height.url} alt={gif.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
