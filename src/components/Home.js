import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Controller,
  Autoplay,
} from "swiper";
import "swiper/css";
import ShortNews from "./ShortNews";
import { connect } from "react-redux";
import loading from "../img/loading-state.gif";
import {
  getTopNews,
  getHomeTeknoloji,
  getHomeSpor,
  getHomeSaglik,
  getHomeBilim,
} from "../actions";
import Hata from "./Hata";

SwiperCore.use([Navigation, Pagination, Controller, Autoplay]);

function Home(props) {
  useEffect(() => {
    props.getTopNews(props.lang);
    props.getHomeTeknoloji(props.lang, props.country);
    props.getHomeSpor(props.lang, props.country);
    props.getHomeSaglik(props.lang, props.country);
    props.getHomeBilim(props.lang, props.country);
  }, [props.lang]);
  const params = {
    spaceBetween: 30,
    centeredSlides: true,
    id: "main",
    tag: "section",
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    navigation: {},
  };
  return (
    <div className="home col-span-10 lg:pl-2">
      <div className="slider flex">
        <Swiper {...params}>
          {props.message ? (
            <Hata message={props.message} />
          ) : props.status === "warning" ? (
            <Hata />
          ) : props.status === "error" ? (
            <Hata message={props.message} />
          ) : !props.news ? null : props.news.length ===
            0 ? null : props.isLoading ? (
            <SwiperSlide tag="li">
              <img
                src={loading}
                style={{ listStyle: "none" }}
                alt={"loading"}
                className="haber_link shadow-inner object-center"
              />
            </SwiperSlide>
          ) : props.news ? (
            props.news.length > 0 ? (
              props.news.slice(0, 5).map((haber, index) => (
                <SwiperSlide key={index} tag="li">
                  <img
                    src={haber.urlToImage ? haber.urlToImage : loading}
                    style={{ listStyle: "none" }}
                    alt={`Slide ${index}`}
                    className="shadow-inner"
                  />
                  <a
                    target="_blank"
                    href={haber.url}
                    rel="noopener nofollow noreferrer"
                    className="haber_link mb-8 ml-4 lg:ml-7 text-lg lg:text-3xl break-words font-bold drop-shadow-md text-white h-auto overflow-hidden"
                  >
                    {haber.title}
                  </a>
                </SwiperSlide>
              ))
            ) : (
              <Hata message={props.message} />
            )
          ) : (
            <Hata message={props.message} />
          )}
        </Swiper>
      </div>
      <div className="shortNews p-2 lg:p-0 mt-5 text-3xl font-medium">
        <h2 className="dark:text-gray-200">Teknoloji Haberleri</h2>
        <ul className="flex overflow-x-auto -m-4 mt-1">
          {!props.home_teknoloji ? (
            <img className="w-44 mx-auto" src={loading} alt="Loading..." />
          ) : props.home_teknoloji.status === "warning" ? (
            <img className="w-44 mx-auto" src={loading} alt="Loading..." />
          ) : props.home_teknoloji === "error" ? (
            <img className="w-44 mx-auto" src={loading} alt="Loading..." />
          ) : props.home_teknoloji.loading ? (
            <img className="w-44 mx-auto" src={loading} alt="Loading..." />
          ) : !props.home_teknoloji ? null : (
            props.home_teknoloji.data &&
            (props.home_teknoloji.data.length > 0 ? (
              props.home_teknoloji.data
                .slice(0, 4)
                .map((haber, index) => <ShortNews haber={haber} key={index} />)
            ) : (
              <img className="w-44 mx-auto" src={loading} alt="Loading..." />
            ))
          )}
        </ul>
      </div>
      <div className="shortNews p-2 lg:p-0 mt-5 text-3xl font-medium">
        <h2 className="dark:text-gray-200">Spor Haberleri</h2>
        <ul className="flex overflow-x-auto -m-4 mt-4">
          {!props.home_spor ? (
            <img className="w-44 mx-auto" src={loading} alt="Loading..." />
          ) : props.home_spor.status === "warning" ? (
            <img className="w-44 mx-auto" src={loading} alt="Loading..." />
          ) : props.home_spor === "error" ? (
            <img className="w-44 mx-auto" src={loading} alt="Loading..." />
          ) : props.home_spor.loading ? (
            <img className="w-44 mx-auto" src={loading} alt="Loading..." />
          ) : !props.home_spor ? null : (
            props.home_spor.data &&
            (props.home_spor.data.length > 0 ? (
              props.home_spor.data
                .slice(0, 4)
                .map((haber, index) => <ShortNews haber={haber} key={index} />)
            ) : (
              <img className="w-44 mx-auto" src={loading} alt="Loading..." />
            ))
          )}
        </ul>
      </div>
      <div className="shortNews p-2 lg:p-0 mt-5 text-3xl font-medium">
        <h2 className="dark:text-gray-200">Sağlık Haberleri</h2>
        <ul className="flex overflow-x-auto -m-4 mt-4">
          {!props.home_saglik ? (
            <img className="w-44 mx-auto" src={loading} alt="Loading..." />
          ) : props.home_saglik.status === "warning" ? (
            <img className="w-44 mx-auto" src={loading} alt="Loading..." />
          ) : props.home_saglik === "error" ? (
            <img className="w-44 mx-auto" src={loading} alt="Loading..." />
          ) : props.home_saglik.loading ? (
            <img className="w-44 mx-auto" src={loading} alt="Loading..." />
          ) : !props.home_saglik ? null : (
            props.home_saglik.data &&
            (props.home_saglik.data.length > 0 ? (
              props.home_saglik.data
                .slice(0, 4)
                .map((haber, index) => <ShortNews haber={haber} key={index} />)
            ) : (
              <img className="w-44 mx-auto" src={loading} alt="Loading..." />
            ))
          )}
        </ul>
      </div>
      <div className="shortNews p-2 lg:p-0 mt-5 text-3xl font-medium">
        <h2 className="dark:text-gray-200">Bilim Haberleri</h2>
        <ul className="flex overflow-x-auto -m-4 mt-4">
          {!props.home_bilim ? (
            <img className="w-44 mx-auto" src={loading} alt="Loading..." />
          ) : props.home_bilim.status === "warning" ? (
            <img className="w-44 mx-auto" src={loading} alt="Loading..." />
          ) : props.home_bilim === "error" ? (
            <img className="w-44 mx-auto" src={loading} alt="Loading..." />
          ) : props.home_bilim.loading ? (
            <img className="w-44 mx-auto" src={loading} alt="Loading..." />
          ) : !props.home_bilim ? null : (
            props.home_bilim.data &&
            (props.home_bilim.data.length > 0 ? (
              props.home_bilim.data
                .slice(0, 4)
                .map((haber, index) => <ShortNews haber={haber} key={index} />)
            ) : (
              <img className="w-44 mx-auto" src={loading} alt="Loading..." />
            ))
          )}
        </ul>
      </div>
    </div>
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
    home_teknoloji: state.home_teknoloji,
    home_spor: state.home_spor,
    home_saglik: state.home_saglik,
    home_bilim: state.home_bilim,
  };
};

export default connect(mapStateToProps, {
  getTopNews,
  getHomeTeknoloji,
  getHomeSpor,
  getHomeSaglik,
  getHomeBilim,
})(Home);
