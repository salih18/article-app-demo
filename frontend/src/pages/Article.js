import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useArticle } from "../redux/hooks";
import axios from "axios";
import {
  Row,
  Col,
  Card,
  CardBody,
  Media,
  Form,
  Label,
  Input,
  FormGroup,
  CustomInput,
  Button,
  Container,
} from "reactstrap";

import { ARTICLE_INITIAL_DATA } from "../helpers/formData";
import { isEmptyObj } from "../helpers/functions";

import EmptyFile from "./../assets/empty-file.png";

import "./Article.scss";


const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { detail, getArticleDetail, createArticle, updateArticle } =
    useArticle();

  const [data, setData] = useState(ARTICLE_INITIAL_DATA);

  const isNewArticle = !id;

  const readInitialImage = async (url) => {
    const response = await axios({
      url,
      responseType: "blob",
    });
    const blob = response.data;
    const file = new File([blob], "image.png", {
      type: blob.type,
    });
    return file;
  };

  const [image, setImage] = useState(null);

  useEffect(() => {
    if (id) {
      getArticleDetail(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!isNewArticle && !isEmptyObj(detail)) {
      setData(detail);
      readInitialImage(detail.hero).then((img) => setImage(img));
    } else {
      setData(ARTICLE_INITIAL_DATA);
    }
  }, [detail, isNewArticle]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("hero", image);
    formData.append("text", data.text);
    formData.append("title", data.title);
    isNewArticle
      ? await createArticle(formData)
      : await updateArticle(formData, id);
    navigate("/");
  };

  const onChange = (e) => {
    const reader = new FileReader();
    const files = e.target.files;
    if (files[0]) {
      setImage(files[0]);
      reader.onload = function () {
        setData((st) => ({ ...st, hero: reader.result }));
      };
      reader.readAsDataURL(files[0]);
    }
  };
  return (
    <Container>
      <Row>
        <Col>
          <Card className="article-edit">
            <CardBody>
              <Media>
                <Media body>
                  <h3 className="mb-5 text-secondary">
                    {isNewArticle
                      ? "Create an Article"
                      : "You are editing the article"}
                  </h3>
                </Media>
              </Media>
              <Form className="mt-2" onSubmit={handleSubmit}>
                <Row>
                  <Col md="12">
                    <FormGroup className="mb-2">
                      <Label for="blog-edit-title" className="text-secondary">
                        Title
                      </Label>
                      <Input
                        id="blog-edit-title"
                        type="textarea"
                        value={data.title}
                        onChange={(e) =>
                          setData((st) => ({ ...st, title: e.target.value }))
                        }
                      />
                    </FormGroup>
                  </Col>

                  <Col md="12">
                    <FormGroup className="mb-2">
                      <Label for="blog-edit-slug" className="text-secondary">
                        Text
                      </Label>
                      <Input
                        style={{ height: "16rem" }}
                        type="textarea"
                        value={data.text}
                        onChange={(e) =>
                          setData((st) => ({ ...st, text: e.target.value }))
                        }
                      />
                    </FormGroup>
                  </Col>

                  <Col className="mb-2" sm="12">
                    <div className="border rounded p-2">
                      <h4 className="mb-1 d-flex text-secondary">Hero Image</h4>
                      <Media className="flex-column flex-md-row">
                        <img
                          className="rounded mr-2 mb-1 mb-md-0"
                          src={data.hero || EmptyFile}
                          alt="featured img"
                          width="170"
                          height="110"
                        />
                        <Media
                          body
                          className="d-flex flex-column justify-content-start align-items-start ml-4"
                        >
                          <small className="text-muted mb-3">
                            Max Image Size 2MB.
                          </small>

                          <div className="d-inline-block">
                            <FormGroup className="mb-0">
                              <CustomInput
                                type="file"
                                id="file-browser"
                                name="customFile"
                                onChange={onChange}
                                accept=".jpg, .png, .gif"
                              />
                            </FormGroup>
                          </div>
                        </Media>
                      </Media>
                    </div>
                  </Col>
                  <Col className="mt-5">
                    <Button color="primary" className="mr-1">
                      Save Changes
                    </Button>
                    <Button color="secondary" outline>
                      Cancel
                    </Button>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Article;
