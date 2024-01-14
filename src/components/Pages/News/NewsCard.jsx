import { Button, Card } from "react-bootstrap";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import Editor from "./Editor";

const NewsCard = () => {
  const newsInfo = useLoaderData();
  const { title, details, image_url, category_id } = newsInfo;
  return (
    <div className="py-5">
      <Card>
        <Card.Body>
          <Card.Title className="py-2">{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text className="py-2">{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="outline-primary">
              <FaArrowLeftLong className="me-2" />
              All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <div className="py-4">
        <Editor />
      </div>
    </div>
  );
};

export default NewsCard;
