import { useEffect, useState } from "react";
import Categories from "../Categories/Categories";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  console.log(categories);
  return (
    <div>
      <h5 className="text-secondary">All Categories</h5>
      <div>
        {categories &&
          categories.map((category) => (
            <Categories key={category.id} category={category} />
          ))}
      </div>
    </div>
  );
};

export default LeftNav;
