import { useState, useEffect } from 'react';


const PopularFeed = () => {

    const [articles, setArticles] = useState([]);

    //const API_KEY = "dba3c85b9be04e8c911d6ddd7430dd04";

    useEffect(() => {
        fetch('https://newsapi.org/v2/top-headlines?country=us', {
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
        <div className="m-3">
            {articles.map((article) => (

                <div className="article" key={article.url}>
                    <h2 className="font-bold" >{article.title}</h2>
                    <img className="h-100 w-100" src={article.urlToImage} alt="article" />
                    <p>{article.description}</p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
                </div>)
            )};
        </div>

    );
};

export default PopularFeed;