import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const Categories = (category) => {
  const { name, id } = category.category;
  return (
    <div className="py-2">
      <Link
        to={`/category/${id}`}
        className="text-primary text-decoration-none"
      >
        {name}
        <FaArrowRightLong className="ms-2" />
      </Link>
    </div>
  );
};

export default Categories;
