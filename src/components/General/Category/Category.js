import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
const category = [
  {
    name: "Trang chủ",
    to: "/",
    exact: true,
  },
  {
    name: "Sản phẩm",
    to: "/products",
    exact: true,
  },
  {
    name: "Tin tức",
    to: "/news",
    exact: true,
  },
  {
    name: "Giới thiệu",
    to: "/about",
    exact: true,
  },
  {
    name: "Liên hệ",
    to: "/contact",
    exact: true,
  },
];
const CategoryLink = ({ label, to, exact }) => {
  return (
    <Route to={to} exact={exact}>
      <li className="hover:text-organce px-2.5 py-4">
        <Link to={to}>{label}</Link>
      </li>
    </Route>
  );
};
class Category extends Component {
  showCategory = (category) => {
    var result = null;
    if (category.length > 0) {
      result = category.map((item, index) => {
        return (
          <CategoryLink
            key={index}
            label={item.name}
            to={item.to}
            exact={item.exact}
          />
        );
      });
    }
    return result;
  };
  render() {
    return (
      <>
        <div
          className="w-40 absolute top-1/2 left-1/2 transform 
            -translate-x-1/2 -translate-y-1/2 m-2"
        >
          <ul className="w-full text-xl font-semibold text-white">
            {this.showCategory(category)}
          </ul>
        </div>
        <span
          className="font-bold text-5xl absolute top-32 right-44 
            text-white cursor-pointer h-0"
        >
          &times;
        </span>
      </>
    );
  }
}

export default Category;
