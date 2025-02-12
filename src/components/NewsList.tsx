import React, { useEffect, useState } from 'react';
import { NewsItem } from '../types/news';

interface NewsListProps {
  category: string;
}

const NewsList: React.FC<NewsListProps> = ({ category }) => {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const categoryMap: { [key: string]: string } = {
        TOP: 'topstories',
        NEW: 'newstories',
        BEST: 'beststories',
      };
      try {
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/${categoryMap[category]}.json`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const newsIds: number[] = await response.json();
        const newsIdsSlice = newsIds.slice(0, 10); // 最初の10件を取得
        const newsPromises = newsIdsSlice.map((id: number) => 
          fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
        );
        const newsResults = await Promise.all(newsPromises);
        setNewsItems(newsResults);
      } catch (error) {
        console.error('Error fetching news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ul>
        {newsItems.map(news => (
          <li key={news.id}>
            <p>{news.by}</p>
            <a href={news.url} target="_blank" rel="noopener noreferrer">
              {news.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NewsList;
