import React, { useEffect } from "react";
import Article from "./Article";

import { Link } from "react-router-dom";

import { Row, Col, Container } from "reactstrap";

import "./ArticleList.scss";

import { useArticle } from "../redux/hooks";

const ArticleList = () => {
  const { list, getArticleList } = useArticle();


  
  useEffect(() => {
    getArticleList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row>
        {list.map((item) => (
          <Col key={item.id} sm="6" md="6" className="mb-4">
            <Article multiple item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ArticleList;
