import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Col, Row, Container, Button } from "reactstrap";
import Article from "./../components/Article";
import { useArticle, useAuth } from "./../redux/hooks";

const ArticleDetail = () => {
  const { detail, getArticleDetail } = useArticle();
  const { isAuthenticated } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getArticleDetail(id);
  }, [getArticleDetail, id]);

  const handleDelete = () => {
    console.log("deleted");
  };

  return (
    <Container>
      <Row>
        <Col>
          <Article item={detail} />
        </Col>
        {isAuthenticated && (
          <Col sm="1">
            <Button
              onClick={() => navigate(`/article/${id}/edit`)}
              size="sm"
              block
              color="primary"
            >
              Edit
            </Button>
            <Button onClick={handleDelete} size="sm" block color="danger">
              Delete
            </Button>
            <Button
              onClick={() => navigate("/article/create/")}
              size="sm"
              block
              color="success"
            >
              Create
            </Button>
          </Col>
        )}
      </Row>
    </Container>
  );
};

export default ArticleDetail;
