import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function KategoriList(props) {
  const categories = [
    {
      id: 1,
      name: "Teknoloji",
      en: "Technology",
      seo: "/kategori/technology",
    },
    {
      id: 2,
      name: "Business",
      en: "Business",
      seo: "/kategori/business",
    },
    {
      id: 3,
      name: "Genel",
      en: "General",
      seo: "/kategori/general",
    },
    {
      id: 4,
      name: "Eğlence",
      en: "Entertainment",
      seo: "/kategori/entertainment",
    },
    {
      id: 5,
      name: "Sağlık",
      en: "Health",
      seo: "/kategori/health",
    },
    {
      id: 6,
      name: "Bilim",
      en: "Science",
      seo: "/kategori/science",
    },
    {
      id: 7,
      name: "Spor",
      en: "Sports",
      seo: "/kategori/sports",
    },
  ];
  return (
    <div className="w-full h-auto md:pl-2 lg:ml-0 p-2 lg:p-1 col-span-2 bg-red-800 lg:bg-transparent">
      <p className="font-bold text-lg hidden lg:block text-red-500 ">
        {props.lang === "tr"
          ? "Kategoriler"
          : props.lang === "en"
          ? "Categories"
          : "Kategoriler"}
      </p>
      <ul className="flex md:items-center md:justify-center lg:flex-col overflow-x-auto lg:overflow-hidden w-full">
        {categories.map((category) => (
          <Link
            key={category.id}
            className="w-full bg-zinc-500 flex items-center lg:justify-start justify-center mx-1 md:mx-3 lg:mx-0 lg:my-1 p-2 lg:px-4 hover:lg:px-6 duration-100 lg:mr-0 rounded text-white"
            to={category.seo}
          >
            {props.lang === "tr"
              ? category.name
              : props.lang === "en"
              ? category.en
              : "En Çok Okunanlar"}
          </Link>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    lang: state.lang,
  };
};

export default connect(mapStateToProps)(KategoriList);
