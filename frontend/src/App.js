import React, { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//Redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { loadUser } from "./redux/actions/auth";

import "./App.css";

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Router>
        <ToastContainer
          className="custom-toast-container"
          toastClassName="custom-toast-wrapper"
          bodyClassName="custom-toast-body"
          progressClassName="custom-toast-progress"
          position="top-left"
          autoClose={1600}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
        />
        {/* <Navbar /> */}
        <Routes>
          <Route exact path="/" component={<div>Test</div>} />
          {/* <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute
            exact
            path="/admin-dashboard"
            component={AdminDashboard}
          />
          <Route exact path="/about" component={About} /> */}
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
