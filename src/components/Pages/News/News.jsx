import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const News = (news) => {
  const { details, image_url, title, _id } = news.news;
  return (
    <div className="py-2">
      <Card>
        <Card.Body>
          <Card.Title className="py-1">{title}</Card.Title>
          <Card.Img variant="top" src={image_url} />
          <Card.Text className="py-2">
            {details && details.length > 200 ? (
              <>
                {details.slice(0, 200)}...
                <Link className="text-danger" to={`/news/${_id}`}>
                  Read More
                </Link>
              </>
            ) : (
              <>{details}</>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default News;
