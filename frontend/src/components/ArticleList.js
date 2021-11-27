import React, { useEffect } from "react";
import Article from "./Article";
import { useNavigate } from "react-router-dom";

import { Row, Col, Container, Button } from "reactstrap";

import "./ArticleList.scss";

import { useArticle, useAuth } from "../redux/hooks";

const ArticleList = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const { list, getArticleList } = useArticle();

  useEffect(() => {
    getArticleList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container className="d-flex">
      <Row>
        {list.map((item) => (
          <Col key={item.id} sm="6" md="6" className="mb-4">
            <Article multiple item={item} />
          </Col>
        ))}
      </Row>
      {isAuthenticated && (
        <div>
          <Button
            onClick={() => navigate("/article/create/")}
            size="sm"
            block
            color="success"
            className="ml-3"
          >
            Create
          </Button>
        </div>
      )}
    </Container>
  );
};

export default ArticleList;
