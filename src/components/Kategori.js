import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Haber from "./Haber";
import { connect } from "react-redux";
import loading from "../img/loading-state.gif";
import { getKategori } from "../actions";
import Hata from "./Hata";

function Kategori(props) {
  var { kategori } = useParams();
  useEffect(() => {
    props.getKategori(String(kategori), props.lang, props.country);
  }, [kategori, props.lang]);
  return (
    <section className="text-gray-600 body-font col-span-10">
      <div className="container px-5 mx-auto max-w-7x1">
        <div className="flex flex-wrap w-full mb-4 p-4">
          <div className="w-full mb-6 lg:mb-0">
            <h1 className="sm:text-4xl text-5xl font-bold title-font mb-2 dark:text-gray-200 text-gray-900">
              {props.lang === "tr"
                ? "Kategori"
                : props.lang === "en"
                ? "Category"
                : "Kategori"}{" "}
              : {kategori}
            </h1>
            <div className="h-1 w-20 bg-red-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {!props.category ? (
            <Hata />
          ) : props.category.status === "warning" ? (
            <Hata message={props.category.message} />
          ) : props.category.status === "error" ? (
            <Hata message={props.category.message} />
          ) : props.category.loading ? (
            <img className="w-44 mx-auto" src={loading} alt="Loading..." />
          ) : !props.category ? null : (
            props.category.data &&
            (props.category.data.length > 0 ? (
              props.category.data.map((haber, index) => (
                <Haber haber={haber} key={index} />
              ))
            ) : (
              <Hata />
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
    category: state.category,
    country: state.country,
  };
};

export default connect(mapStateToProps, { getKategori })(Kategori);
