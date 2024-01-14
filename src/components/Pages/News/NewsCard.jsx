import { useLoaderData } from "react-router-dom";

const NewsCard = () => {
  const newsInfo = useLoaderData();
  const { title, details, image_url } = newsInfo;
  return (
    <div>
      <h2>This is News Card</h2>
    </div>
  );
};

export default NewsCard;
