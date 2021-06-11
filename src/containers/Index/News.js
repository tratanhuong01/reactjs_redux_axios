import React, { Component } from "react";
import NewsLeft from "../../components/Index/News/NewsLeft/NewsLeft";
import NewsRight from "../../components/Index/News/NewsRight/NewsRight";

class News extends Component {
  render() {
    return (
      <div className="xl:w-4/5 w-full flex flex-col sm:flex-row mx-auto p-4">
        <NewsLeft />
        <NewsRight />
      </div>
    );
  }
}

export default News;
