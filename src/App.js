import './index.css';
//import { useState, useEffect } from 'react';
import MainFeed from './components/MainFeed.js';
import PopularFeed from './components/PopularFeed';
import SearchBar from './components/SearchBar';
import { FaSearch } from 'react-icons/fa';
//import img from './images/newspaper.jpg';


const App = () => {

    return (
        <div className="m-3">
            <div className="items-center inline-flex mt-5">
                <FaSearch className="ms-5 mt-5"/>
                <SearchBar className="flex-end"/>
            </div>
            <div className="inline-flex">
                <div className="m-3 w-2/3">
                    <div className="font-semibold underline mb-2">
                        NEWS
                    </div>
                    <MainFeed className="flex-start" />
                </div>
                <div className="m-3 w-1/3">
                    <div className="font-semibold underline ms-3">
                        POPULAR TODAY
                    </div>
                    <PopularFeed className="flex-end" />
                </div>
                
            </div>
        </div>
	);
};

export default App;