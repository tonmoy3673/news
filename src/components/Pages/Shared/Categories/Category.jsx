import { Card } from "react-bootstrap";
import { useLoaderData, useParams } from "react-router-dom";

const Category = () => {
  const category = useLoaderData();
  const { title, details, rating, author, image_url } = category;
  console.log(category);
  const { id } = useParams();
  return (
    <div>
      <h2>News Category {category.length}</h2>

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the content.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Category;
