import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SelectLang from "./SelectLang";
import { connect } from "react-redux";
import { setLang } from "../actions/index";

function Header(props) {
  const [theme, setTheme] = useState(false);
  useEffect(() => {
    if (theme) {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      window.localStorage.setItem("dark", true);
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      window.localStorage.setItem("dark", false);
    }
  }, [theme]);
  return (
    <div className="bg-red-500 lg:px-10 xl:px-32 py-2 lg:py-1 md:flex justify-between text-center items-center text-white">
      <div className="links w-auto h-full flex base:mb-5 md:mb-0 text-center justify-center items-center">
        <Link
          to="/"
          className="lg:text-lg bg-red-400 dark:bg-red-600 p-2.5 my-2 mx-1 lg:my-2 lg:mx-2 rounded-lg hover:underline"
        >
          Ana Sayfa
        </Link>
        <Link
          to="/top"
          className="lg:text-lg bg-red-400 dark:bg-red-600 p-2.5 my-2 mx-1 lg:my-2 lg:mx-2 rounded-lg hover:underline"
        >
          {props.lang === "tr"
            ? "En Çok Okunanlar"
            : props.lang === "en"
            ? "Most Read"
            : "En Çok Okunanlar"}
        </Link>
        <button
          className="lg:text-lg bg-red-400 dark:bg-red-600 p-2.5 my-2 mx-1 lg:my-2 lg:mx-2 rounded-lg hover:underline"
          onClick={() => setTheme(!theme)}
        >
          {props.lang === "tr"
            ? "Koyu Mod"
            : props.lang === "en"
            ? "Dark Mod"
            : "Koyu Mod"}
        </button>
      </div>
      <div className="form flex items-center justify-center h-full">
        <SelectLang lang={props.lang} setLang={props.setLang} />
        <form
          action="/ara"
          method="get"
          className="flex justify-center items-center ml-2"
        >
          <div className="max-w-md mx-auto">
            <div className="relative flex items-center w-48 lg:w-80 h-10 rounded focus-within:shadow-lg dark:bg-red-600 bg-white overflow-hidden">
              <div className="grid place-items-center h-full w-12 dark:text-white text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>

              <input
                className="peer dark:bg-red-600 pr-2 h-full w-full outline-none text-sm text-gray-700"
                type="search"
                name="q"
                placeholder={
                  props.lang === "tr"
                    ? "Arama..."
                    : props.lang === "en"
                    ? "Search Something..."
                    : "Ara"
                }
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary dark:bg-red-600 dark:text-white bg-gray-800 text-gray-50 px-3 h-10 rounded outline-none ml-1.5 text-lg text-bold"
          >
            {props.lang === "tr"
              ? "Ara"
              : props.lang === "en"
              ? "Search"
              : "Ara"}
          </button>
        </form>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
  };
};

export default connect(mapStateToProps, { setLang })(Header);
