import { useEffect, useState } from "react";
import '../styles/News.css'

const News = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=%22Animal%20cruelty%22&language=en&sortBy=popularity&apiKey=f56be75d496143a2b2aad7815515c305`
        );
        const data = await response.json();
        const filteredArticles = data.articles.filter(
          (article) => article.source.name !== "[Removed]" && article.source.name !== null
        );
        setArticles(filteredArticles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="container">
      <h2 className="newsPageTitle">Animal Cruelty News</h2>
      <div className="articles-container">
        {articles.map((article, index) => (
          <a
            href={article.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="article"
          >
            <div className="article-image">
              <img src={article.urlToImage} alt="Article" />
            </div>
            <div className="article-details">
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
