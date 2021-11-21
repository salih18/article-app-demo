import { useCallback } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";
import { loadUser, login, logout } from "./actions/auth";

import { selectAuth } from "./selectors";

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
