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
} from "./../actions/types";

const initialState = {
  list: [],
  detail: {},
  totalPages: null,
  loading: false,
  error: {},
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ARTICLE:
    case GET_ARTICLES:
    case CREATE_ARTICLE:
    case UPDATE_ARTICLE:
    case DELETE_ARTICLE:
      return {
        ...state,
        loading: true,
      };

    case GET_ARTICLES_SUCCESS:
      return {
        ...state,
        loading: false,
        list: payload,
      };
    case GET_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
        detail: payload,
      };

    case UPDATE_ARTICLE_SUCCESS:
      return {
        ...state,
        list: state.list.map((article) =>
          article.id === payload.id ? { ...payload } : article
        ),
        loading: false,
      };
    case CREATE_ARTICLE_SUCCESS:
    case DELETE_ARTICLE_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case GET_ARTICLE_ERROR:
    case GET_ARTICLES_ERROR:
    case CREATE_ARTICLE_ERROR:
    case UPDATE_ARTICLE_ERROR:
    case DELETE_ARTICLE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}
