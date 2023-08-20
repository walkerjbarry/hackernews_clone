import { useState } from 'react';
import '../index.css';

import axios from 'axios';

const searchArticles = async (term) => {
    const response = await axios.get('GET https://newsapi.org/v2/everything?q=&apiKey=API_KEY', {
        headers: {
            Authorization: 'dba3c85b9be04e8c911d6ddd7430dd04'
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
};

function SearchBar({ onSubmit }) {
    const [term, setTerm] = useState('');
   

        const handleFormSubmit = (event) => {
            event.preventDefault();

            onSubmit(term);
        };

        const handleChange = (event) => {
            setTerm(event.target.value);
        };
    

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                
                <input className="ms-5 shadow-inner bg-blend-color-burn"placeholder="Search"value={term} onChange={handleChange} />

            </form>
        </div>);
};

export default SearchBar;