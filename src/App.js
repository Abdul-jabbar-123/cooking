import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './Components/Navbar.css';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Help from './pages/Help';
import Contact from './pages/Contact';
import ImageSlider from './Components/ImageSlider';
import Button from './Components/Button';
import pic1 from './Components/pic1.jpeg';
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';

const App = () => {
  const [menu, setMenu] = useState([]);
  const [id, setId] = useState("");

  const Hit = () => {
    console.log("ID=====>", id)
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error fetching recipe:', error));
  };

  const handleClick = () => {
    alert('Button clicked!');
  };

  useEffect(() => {
    fetch('https://dummyjson.com/recipes')
      .then(res => res.json())
      .then(data => {
        if (data && data.recipes) {
          setMenu(data.recipes);
        } else {
          console.error('Unexpected response format:', data);
        }
      })
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <Router>
      <div className="cooking-pale">
        <div>
          <header className="navbar-header">
            <div>
              <img src={pic1} alt="cookpal" />
            </div>
            <div className='search-Container'>
              <div className='search-bar'>
                <input type="search" placeholder='Search for recipe....' onChange={(e) => setId(e.target.value)} />
                <FaSearch className='icon' onClick={() => Hit()} />
              </div>
            </div>
            <nav className='navbar'>
              <ul className="navbar-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/explore">Explore</Link></li>
                <li><Link to="/help">Help</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </nav>
          </header>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/help" element={<Help />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <div className="slides">
        <ImageSlider />
      </div>
      <div className='section-btn'>
        <Button
          text="Recipe & Menu"
          onClick={handleClick}
          style={{ backgroundColor: '#f5794c', color: 'white', padding: '20px 20px', border: 'none', borderRadius: '5px', fontSize: '18px', width: '100%', height: '60px' }}
        />
        <Button
          text="Share your Recipe"
          onClick={handleClick}
          style={{ backgroundColor: '#c4d600', color: 'white', padding: '20px 20px', border: 'none', fontSize: '18px', borderRadius: '5px', width: '100%', height: '60px' }}
        />
        <Button
          text="Custom meal plan"
          onClick={handleClick}
          style={{ backgroundColor: '#ebac00', color: 'white', padding: '1px 20px', fontSize: '18px', border: 'none', width: '100%', height: '60px', borderRadius: '5px' }}
        />
        <Button
          text="Create grocery list"
          onClick={handleClick}
          style={{ backgroundColor: '#ed8a00', color: 'white', padding: '20px 20px', fontSize: '18px', textAlign: 'center', border: 'none', width: '100%', height: '60px', borderRadius: '5px' }}
        />
        <Button
          text="Cooking tips and tricks"
          onClick={handleClick}
          style={{ backgroundColor: '#84bd00', fontSize: '18px', color: 'white', padding: '20px 20px', border: 'none', width: '100%', height: '60px', borderRadius: '5px' }}
        />
      </div>
      <div className='main-section'>
        <div style={{ display: 'flex', flexDirection: 'row', placeItems: 'center', flexWrap: "wrap", gap: 60 }}>
          {menu.length > 0 ? (
            menu.map((item, index) => (
              <div key={index} className='cards'>
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: '100%', height: '200px', marginTop: '10px', padding: '8px', borderRadius: '20px' }}
                  />
                )}
                <p className='para'>Dairy Free</p>
                <p className='para'>{item.name}</p>
                <p className='para' style={{ fontSize: '17px', color: 'red' }}>{item.cookTimeMinutes} min</p>
              </div>
            ))
          ) : (
            <p>Loading recipes...</p>
          )}
        </div>
      </div>
    </Router>
  );
};

export default App;
