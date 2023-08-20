import { useState, useEffect } from 'react';


const PopularFeed = () => {



    
    const [articles, setArticles] = useState();

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
        <div>
            <div>Popular This Week</div>
        </div>
            );
};

export default PopularFeed;