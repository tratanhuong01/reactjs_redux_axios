import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
import { connect } from "react-redux";
import * as actions from "./actions/index";
class App extends Component {
  componentDidMount() {
    this.props.getAllProductRequest();
    this.props.getAllCartRequest();
  }
  render() {
    return (
      <Router>
        <Switch>{this.showAllLinks(routes)}</Switch>
      </Router>
    );
  }
  showAllLinks = (routes) => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
      return result;
    }
  };
}
const mapDispatchToProps = (dispatch, props) => {
  return {
    getAllProductRequest: () => {
      dispatch(actions.getAllProductRequest());
    },
    getAllCartRequest: () => {
      dispatch(actions.getAllCartRequest());
    },
  };
};
export default connect(null, mapDispatchToProps)(App);
