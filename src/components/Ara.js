import React, { useEffect } from "react";
import Haber from "./Haber";
import { setSearch } from "../actions";
import { connect } from "react-redux";
import loading from "../img/loading-state.gif";
import Hata from "./Hata";

function Ara(props) {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var c = url.searchParams.get("q");

  useEffect(() => {
    props.setSearch(String(c), props.lang);
  }, [c, props.lang]);
  return (
    <section className="text-gray-600 body-font col-span-10">
      <div className="container px-5 mx-auto max-w-7x1">
        <div className="flex flex-wrap w-full mb-4 p-4">
          <div className="w-full mb-6 lg:mb-0">
            <h1 className="dark:text-gray-200 sm:text-4xl text-5xl font-bold title-font mb-2 text-gray-900">
              Arama : {c}
            </h1>
            <div className="h-1 w-20 bg-red-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {!c ? (
            <p className="text-black font-bold">Boş arama yapılmaz!</p>
          ) : props.search.message && props.search.message ? (
            <Hata message={props.search.message} />
          ) : props.search.status === "warning" ? (
            <Hata />
          ) : props.search.status === "error" ? (
            <Hata message={props.search.message} />
          ) : props.search.loading ? (
            <img className="w-44 mx-auto" src={loading} alt="Loading..." />
          ) : (
            props.search.data &&
            (props.search.data.length > 0 ? (
              props.search.data.map((haber, index) => (
                <Haber haber={haber} key={index} />
              ))
            ) : (
              <Hata message={props.search.message} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
    search: state.search,
  };
};

export default connect(mapStateToProps, { setSearch })(Ara);
