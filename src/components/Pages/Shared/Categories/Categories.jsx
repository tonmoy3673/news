import { Link } from "react-router-dom";

const Categories = (category) => {
  const { name, id } = category.category;
  return (
    <div className="py-2">
      <Link
        to={`/category/${id}`}
        className="text-primary text-decoration-none"
      >
        {name}
      </Link>
    </div>
  );
};

export default Categories;
