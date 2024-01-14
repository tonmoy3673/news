import { Card } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";

const NewsCard = () => {
  const newsInfo = useLoaderData();
  const { title, details, image_url } = newsInfo;
  return (
    <div className="py-5">
      <h2>This is News Card</h2>
      <Card>
        <Card.Body>
          <Card.Title className="py-2">{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text className="py-2">{details}</Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewsCard;
