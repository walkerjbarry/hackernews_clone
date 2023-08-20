import './index.css';
import { useState, useEffect } from 'react';
import MainFeed from './components/MainFeed.js';
import PopularFeed from './components/PopularFeed';
import SearchBar from './components/SearchBar';
import img from './images/newspaper.jpg';


const App = () => {

    return (
        <div className="w-100 max-h-100" style={{ backgroundImage: `url(${img})` }}>
            <SearchBar />
            <MainFeed />    
            <PopularFeed />
		</div>
	);
};

export default App;