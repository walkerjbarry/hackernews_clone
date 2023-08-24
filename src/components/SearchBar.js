import { useState, useEffect } from 'react';
//import Search from './Search';
import '../index.css';


const SearchBar = () => {

    const [searchInput, setSearchInput] = useState();

    const [articles, setArticles] = useState([]);

    const handleChange = (event) => {
        event.preventDefault();
        setSearchInput(event.target.value);

    };


    useEffect(()=>{
        
        fetch(`https://newsapi.org/v2/everything?q&from=2023-08-18&sortBy=popularity`, {
                method: "GET",
                headers: {
                    "X-Api-Key": "dba3c85b9be04e8c911d6ddd7430dd04",
                    q: { searchInput } ,
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
        
        
    });
    

    return (
        <div>
            <div className="rounded-lg mx-5 my-3">
                <form >
                    <input value={ searchInput} className="ms-5 shadow-md" placeholder="Search Articles" onChange={handleChange} />
                </form>
            </div>
        
            {articles.map((article) => (

                <div className="article mb-5" key={article.url}>
                    <h2 className="font-bold" >{article.title}</h2>
                    <img className="h-100 w-100" src={article.urlToImage} alt="article" />
                    <p>{article.description}</p>
                    <a href={article.url}><strong>Read More</strong></a>


                </div>)
            )};
        </div>
    );
};
  

export default SearchBar;