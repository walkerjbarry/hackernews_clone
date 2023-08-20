import { useState, useEffect } from 'react';


const MainFeed = () => {
    
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=climate&from=2023-08-18&sortBy=popularity', {
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
    },[]);
    
   // const renderedArticles = articles.map())

    return (
        <div>
            Main Feed
            <div></div>
        </div>

    );
};

export default MainFeed;