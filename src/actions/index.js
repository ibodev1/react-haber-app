import axios from "axios";

export const setLang = (data, country) => (dispatch) => {
  var ulke = country.toUpperCase();
  dispatch({ type: "SET_LANG", lang: data, country: country });
  window.localStorage.removeItem("lang");
  window.localStorage.removeItem("dil");
  window.localStorage.removeItem("ulke");
  window.localStorage.setItem("dil", data + "-" + ulke);
  window.localStorage.setItem("lang", data);
  window.localStorage.setItem("ulke", country);
};

export const getTopNews = (lang, country) => (dispatch) => {
  dispatch({ type: "GET_NEWS_START" });
  axios
    .get("https://newsapi.org/v2/top-headlines", {
      params: {
        apiKey: process.env.REACT_APP_API_KEY,
        language: lang,
        country: country,
      },
    })
    .then((response) =>
      dispatch({ type: "GET_NEWS_SUCCESS", payload: response.data.articles })
    )
    .catch((error) => dispatch({ type: "GET_NEWS_ERROR", payload: error }));
};

export const getKategori = (category, lang, country) => (dispatch) => {
  dispatch({ type: "GET_CATEGORY_START" });
  axios
    .get("https://newsapi.org/v2/top-headlines", {
      params: {
        apiKey: process.env.REACT_APP_API_KEY,
        language: lang,
        category: category,
        country: country,
      },
    })
    .then((response) =>
      dispatch({
        type: "GET_CATEGORY_SUCCESS",
        name: category,
        payload: response.data.articles,
      })
    )
    .catch((error) => dispatch({ type: "GET_CATEGORY_ERROR", payload: error }));
};

export const setSearch = (query, lang) => (dispatch) => {
  dispatch({ type: "SET_SEARCH_START" });
  axios
    .get("https://newsapi.org/v2/everything", {
      params: {
        apiKey: process.env.REACT_APP_API_KEY,
        language: lang,
        sortBy: "relevancy",
        q: query,
      },
    })
    .then((response) =>
      dispatch({
        type: "SET_SEARCH_SUCCES",
        payload: response.data.articles,
      })
    )
    .catch((error) => dispatch({ type: "SET_SEARCH_ERROR", payload: error }));
};

export const getHomeTeknoloji = (lang, country) => (dispatch) => {
  dispatch({ type: "GET_HOME_TEKNOLOJI_START" });
  axios
    .get("https://newsapi.org/v2/top-headlines", {
      params: {
        apiKey: process.env.REACT_APP_API_KEY,
        language: lang,
        category: "technology",
        country: country,
      },
    })
    .then((response) =>
      dispatch({
        type: "GET_HOME_TEKNOLOJI_SUCCES",
        payload: response.data.articles,
      })
    )
    .catch((error) =>
      dispatch({ type: "GET_HOME_TEKNOLOJI_ERROR", payload: error })
    );
};

export const getHomeSpor = (lang, country) => (dispatch) => {
  dispatch({ type: "GET_HOME_SPOR_START" });
  axios
    .get("https://newsapi.org/v2/top-headlines", {
      params: {
        apiKey: process.env.REACT_APP_API_KEY,
        language: lang,
        category: "sports",
        country: country,
      },
    })
    .then((response) =>
      dispatch({
        type: "GET_HOME_SPOR_SUCCES",
        payload: response.data.articles,
      })
    )
    .catch((error) =>
      dispatch({ type: "GET_HOME_SPOR_ERROR", payload: error })
    );
};

export const getHomeSaglik = (lang, country) => (dispatch) => {
  dispatch({ type: "GET_HOME_SAGLIK_START" });
  axios
    .get("https://newsapi.org/v2/top-headlines", {
      params: {
        apiKey: process.env.REACT_APP_API_KEY,
        language: lang,
        category: "health",
        country: country,
      },
    })
    .then((response) =>
      dispatch({
        type: "GET_HOME_SAGLIK_SUCCES",
        payload: response.data.articles,
      })
    )
    .catch((error) =>
      dispatch({ type: "GET_HOME_SAGLIK_ERROR", payload: error })
    );
};

export const getHomeBilim = (lang, country) => (dispatch) => {
  dispatch({ type: "GET_HOME_BILIM_START" });
  axios
    .get("https://newsapi.org/v2/top-headlines", {
      params: {
        apiKey: process.env.REACT_APP_API_KEY,
        language: lang,
        category: "science",
        country: country,
      },
    })
    .then((response) =>
      dispatch({
        type: "GET_HOME_BILIM_SUCCES",
        payload: response.data.articles,
      })
    )
    .catch((error) =>
      dispatch({ type: "GET_HOME_BILIM_ERROR", payload: error })
    );
};
