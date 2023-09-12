import { useState } from 'react';
import '../index.css';
import { FaSearch } from 'react-icons/fa';


const SearchBar = () => {

    const [searchInput, setSearchInput] = useState('');

    const [articles, setArticles] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://newsapi.org/v2/everything?q=${searchInput}&from=2023-08-18&sortBy=popularity`, {
            method: "GET",
            headers: {
                "X-Api-Key": "dba3c85b9be04e8c911d6ddd7430dd04",
            },
        })
            .then((res) => res.json())
            .then(data => {
                setArticles(data.articles);
                console.log(data.articles);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }
    

    return (
        <div className="inline-flex">
            <div>
                <div className="inline-flex rounded-lg mx-5 my-3">
                    <FaSearch className="flex-start"/>
                    <form className="flex-end" onSubmit={handleSubmit}>
                        <input id="search" value={searchInput} className="ms-5 shadow-md border 2px solid" placeholder="Search Articles" onChange={e=>setSearchInput(e.target.value)} />
                    </form>
                </div>

                {articles.map((article) => (

                    <div className="article mb-5" key={article.url}>
                        <h2 className="font-bold" >{article.title}</h2>
                        <img className="h-100 w-100" src={article.urlToImage} alt="article" />
                        <p>{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer"><strong>Read More</strong></a>


                    </div>)
                    )}
                </div>
        </div>
    )
};


export default SearchBar;