import { useEffect, useState } from "react";
import '../styles/News.css'
import CircularProgress from '@mui/material/CircularProgress';


const News = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading,setIsLoading] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=%22Animal%20cruelty%22&language=en&sortBy=popularity&apiKey=f56be75d496143a2b2aad7815515c305`
        );
        const data = await response.json();
        const filteredArticles = data.articles.filter(
          (article) => article.source.name !== "[Removed]" && article.source.name !== null
        );
        setArticles(filteredArticles);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    isLoading?
    <div className="loadingContainer">
        <CircularProgress className="loadingIcon" size={"3rem"}/>
        <p>Loading...</p>
    </div>:
    <div className="container newsPageContainer">
      <h2 className="newsPageTitle">Animal Cruelty News</h2>
      <div className="articlesContainer">
        {articles.map((article, index) => (
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="article"
          >
            <div className="articleImage">
              <img src={article.urlToImage} alt="Article" />
            </div>
            <div className="articleDetails">
              <h3>{article.title}</h3>
              <p className="author">{article.author}</p>
              <p className="description">{article.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default News;
