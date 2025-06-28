import { useLanguage } from '../../context/LanguageContext';
import { NewsItem } from '../../types/news';

interface Props {
  news: NewsItem;
}

const NewsCard = ({ news }: Props) => {
  const { t, language } = useLanguage();

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={news.image} alt="Yangilik rasmi" className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">
          {language === 'uz' ? news.titleUz : news.titleRu}
        </h2>
        <p className="text-gray-600 text-sm">
          {language === 'uz' ? news.contentUz : news.contentRu}
        </p>
        <p className="text-xs text-gray-400 mt-2">{new Date(news.date).toLocaleDateString()}</p>
      </div>
    </div>
  );
};

export default NewsCard;
