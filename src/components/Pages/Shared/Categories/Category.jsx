import { useLoaderData } from "react-router-dom";
import News from "../../News/News";

const Category = () => {
  const category = useLoaderData();

  return (
    <div>
      <div>
        {category &&
          category.map((news) => <News key={news._id} news={news} />)}
      </div>
    </div>
  );
};

export default Category;
