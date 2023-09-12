import { useState, useEffect } from 'react';
import SearchBar from './SearchBar';

const MainFeed = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tech&from=2023-08-18&sortBy=popularity', {
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
    }, []);

    return (
        <div>
            <SearchBar />

            {articles.map((article) => (

                <div className="article mb-5" key={article.url}>
                    <h2 className="font-bold" >{article.title}</h2>
                    <img className="h-100 w-100" src={article.urlToImage} alt="article" />
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer"><strong>Read More</strong></a>

                </div>)
            )};
        </div>
    );
};

export default MainFeed;