import { useCallback } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { loadUser, login, logout } from "./actions/auth";
import {
  getArticleList,
  getArticleDetail,
  updateArticle,
  createArticle,
  deleteArticle,
} from "./actions/article";

import { selectAuth, selectArticle } from "./selectors";

export function useAuth() {
  const dispatch = useDispatch();
  const { token, isAuthenticated, loading, user } = useSelector(
    selectAuth,
    shallowEqual
  );

  const boundLoadUser = useCallback(
    (...args) => {
      return dispatch(loadUser(...args));
    },
    [dispatch]
  );

  const boundLoginUser = useCallback(
    (...args) => {
      return dispatch(login(...args));
    },
    [dispatch]
  );
  const boundLogoutUser = useCallback(
    (...args) => {
      return dispatch(logout(...args));
    },
    [dispatch]
  );

  return {
    token,
    isAuthenticated,
    loading,
    user,
    loadUser: boundLoadUser,
    loginUser: boundLoginUser,
    logoutUser: boundLogoutUser,
  };
}

export function useArticle() {
  const dispatch = useDispatch();
  const { list, detail, loading, error, totalPages } = useSelector(
    selectArticle,
    shallowEqual
  );

  const boundGetArticleList = useCallback(
    (...args) => {
      return dispatch(getArticleList(...args));
    },
    [dispatch]
  );

  const boundGetArticleDetail = useCallback(
    (...args) => {
      return dispatch(getArticleDetail(...args));
    },
    [dispatch]
  );

  const boundUpdateArticle = useCallback(
    (...args) => {
      return dispatch(updateArticle(...args));
    },
    [dispatch]
  );

  const boundCreateArticle = useCallback(
    (...args) => {
      return dispatch(createArticle(...args));
    },
    [dispatch]
  );

  const boundDeleteArticle = useCallback(
    (...args) => {
      return dispatch(deleteArticle(...args));
    },
    [dispatch]
  );

  return {
    list,
    detail,
    loading,
    error,
    totalPages,
    getArticleList: boundGetArticleList,
    getArticleDetail: boundGetArticleDetail,
    updateArticle: boundUpdateArticle,
    createArticle: boundCreateArticle,
    deleteArticle: boundDeleteArticle,
  };
}
