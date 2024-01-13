import { Link } from "react-router-dom";

const Categories = (category) => {
  const { name } = category.category;
  return (
    <div className="py-1">
      <Link className="text-primary text-decoration-none">{name}</Link>
    </div>
  );
};

export default Categories;
