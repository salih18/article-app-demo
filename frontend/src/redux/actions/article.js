import axios from "axios";
import {
  GET_ARTICLE,
  GET_ARTICLES,
  CREATE_ARTICLE,
  UPDATE_ARTICLE,
  DELETE_ARTICLE,
  GET_ARTICLE_SUCCESS,
  GET_ARTICLES_SUCCESS,
  CREATE_ARTICLE_SUCCESS,
  UPDATE_ARTICLE_SUCCESS,
  DELETE_ARTICLE_SUCCESS,
  GET_ARTICLE_ERROR,
  GET_ARTICLES_ERROR,
  CREATE_ARTICLE_ERROR,
  UPDATE_ARTICLE_ERROR,
  DELETE_ARTICLE_ERROR,
} from "./types";
import { toast } from "react-toastify";
import { showError } from "./../../helpers/functions";

const API_URL = process.env.REACT_APP_API_URL;

export const getArticleList = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ARTICLES,
    });
    const res = await axios.get(`${API_URL}/api/article/`);

    dispatch({
      type: GET_ARTICLES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ARTICLES_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const getArticleDetail = (id) => async (dispatch) => {
  try {
    dispatch({
      type: GET_ARTICLE,
    });
    const res = await axios.get(`${API_URL}/api/article/${id}/`);
    dispatch({
      type: GET_ARTICLE_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_ARTICLE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const updateArticle = (formData, id) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_ARTICLE,
    });
    const res = await axios.put(`${API_URL}/api/article/${id}/`, formData);

    dispatch({
      type: UPDATE_ARTICLE_SUCCESS,
      payload: res.data,
    });

    toast.success("Article updated successfully");
  } catch (err) {
    showError(err);

    dispatch({
      type: UPDATE_ARTICLE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const createArticle = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_ARTICLE,
    });
    const res = await axios.post(`${API_URL}/api/article/`, formData);

    dispatch({
      type: CREATE_ARTICLE_SUCCESS,
      payload: res.data,
    });

    toast.success("Article has been created");
  } catch (err) {
    showError(err);

    dispatch({
      type: CREATE_ARTICLE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

export const deleteArticle = (id) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_ARTICLE,
    });
    const res = await axios.delete(`${API_URL}/api/article/${id}`);

    await dispatch({
      type: DELETE_ARTICLE_SUCCESS,
      payload: res.data,
    });

    toast.success("Article deleted successfully");
  } catch (err) {
    dispatch({
      type: DELETE_ARTICLE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};
