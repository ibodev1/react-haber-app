import React, { useEffect } from "react";
import { getSources } from "../actions";
import Haber from "./Haber";
import { connect } from "react-redux";
import loading from "../img/loading-state.gif";
import Hata from "./Hata";

function Kaynaklar(props) {
  console.log(props);
  useEffect(() => {
    props.getSources(props.lang, props.country);
  }, [props.lang]);
  return (
    <section className="text-gray-600 body-font col-span-10">
      <div className="container px-5 mx-auto max-w-7x1">
        <div className="flex flex-wrap w-full mb-4 p-4">
          <div className="w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl dark:text-gray-200 text-5xl font-bold title-font mb-2 text-gray-900">
              {props.lang === "tr"
                ? "Kaynaklar"
                : props.lang === "en"
                ? "Sources"
                : "Kaynaklar"}
            </h1>
            <div className="h-1 w-20 bg-red-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {props.sources.loading ? (
            <img className="w-44 mx-auto" src={loading} alt="Loading..." />
          ) : props.sources.status === "warning" ? (
            <Hata message={props.sources.message} />
          ) : props.sources.status === "error" ? (
            <Hata message={props.sources.message} />
          ) : props.sources.message ? (
            <Hata message={props.sources.message} />
          ) : props.sources.data ? (
            props.sources.data.length > 0 ? (
              props.sources.data.map((haber, index) => (
                <Haber haber={haber} key={index} />
              ))
            ) : (
              <Hata message={props.sources.message} />
            )
          ) : (
            <Hata message={props.sources.message} />
          )}
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
    country: state.country,
    sources: state.sources,
  };
};

export default connect(mapStateToProps, { getSources })(Kaynaklar);
