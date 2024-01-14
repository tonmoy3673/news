import moment from "moment/moment";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaRegBookmark } from "react-icons/fa6";
import { FaShareNodes } from "react-icons/fa6";

const News = (news) => {
  const { details, image_url, title, _id, author } = news.news;
  return (
    <div className="py-2">
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <div className="d-flex py-2">
            <Image
              style={{ height: "40px" }}
              src={author.img}
              className="img-fluid"
              roundedCircle
            ></Image>
            <div className="ms-4 mb-0 text-start flex-grow-1">
              <p className="mb-0">{author?.name}</p>
              <p>
                <small>
                  {moment(author?.published_date).format("yyyy-MM-D")}
                </small>
              </p>
            </div>
          </div>
          <Link>
            <FaRegBookmark className="me-2" />
            <FaShareNodes />
          </Link>
        </Card.Header>
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
        <Card.Footer className="text-muted">2 Days Ago</Card.Footer>
      </Card>
    </div>
  );
};

export default News;
