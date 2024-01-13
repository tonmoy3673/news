import { useLoaderData } from "react-router-dom";
import News from "../../News/News";

const Category = () => {
  const category = useLoaderData();

  console.log(category);

  return (
    <div>
      <h2>News Category {category.length}</h2>

      <div>
        {category &&
          category.map((news) => <News key={news._id} news={news} />)}
      </div>
    </div>
  );
};

export default Category;
