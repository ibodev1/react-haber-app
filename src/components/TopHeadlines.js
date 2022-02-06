import React, { useEffect } from "react";
import { getTopNews } from "../actions";
import Haber from "./Haber";
import { connect } from "react-redux";
import loading from "../img/loading-state.gif";
import Hata from "./Hata";

function TopHeadlines(props) {
  useEffect(() => {
    props.getTopNews(props.lang, props.country);
  }, [props.lang]);
  return (
    <section className="text-gray-600 body-font col-span-10">
      <div className="container px-5 mx-auto max-w-7x1">
        <div className="flex flex-wrap w-full mb-4 p-4">
          <div className="w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl dark:text-gray-200 text-5xl font-bold title-font mb-2 text-gray-900">
              {props.lang === "tr"
                ? "En Çok Okunanlar"
                : props.lang === "en"
                ? "Most Read"
                : "En Çok Okunanlar"}
            </h1>
            <div className="h-1 w-20 bg-red-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4 justify-center lg:justify-start">
          {props.isLoading ? (
            <img className="w-44 mx-auto" src={loading} alt="Loading..." />
          ) : props.status === "warning" ? (
            <Hata message={props.message} />
          ) : props.status === "error" ? (
            <Hata message={props.message} />
          ) : props.message ? (
            <Hata message={props.message} />
          ) : props.news ? (
            props.news.length > 0 ? (
              props.news.map((haber, index) => (
                <Haber haber={haber} key={index} />
              ))
            ) : (
              <Hata message={props.message} />
            )
          ) : (
            <Hata message={props.message} />
          )}
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    news: state.news,
    isLoading: state.isLoading,
    lang: state.lang,
    country: state.country,
    status: state.status,
    message: state.message,
  };
};

export default connect(mapStateToProps, { getTopNews })(TopHeadlines);
