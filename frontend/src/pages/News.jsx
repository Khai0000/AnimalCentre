import { useEffect, useState } from "react";
import "../styles/News.css";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";

const News = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `http://localhost:8000/server.php/news`
        );

        const filteredArticles = response.data.articles.filter(
          (article) =>
            article.source.name !== "[Removed]" && article.source.name !== null
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

  return isLoading ? (
    <div className="loadingContainer">
      <CircularProgress className="loadingIcon" size={"3rem"} />
      <p>Loading...</p>
    </div>
  ) : (
    <div className="container newsPageContainer">
      <h2 className="newsPageTitle">Plastic Pollution News</h2>
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
              <h4>{article.title}</h4>
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
