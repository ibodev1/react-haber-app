const INITIAL_STATE = {
  isLoading: false,
  lang: window.localStorage.getItem("lang") || "tr",
  country: window.localStorage.getItem("ulke") || "tr",
  news: [],
  messages: "",
  status: "warning",
  category: {
    status: "warning",
    name: "",
    loading: false,
    message: "",
    data: [],
  },
  search: {
    status: "warning",
    loading: false,
    message: "",
    data: [],
  },
  home_teknoloji: {
    status: "warning",
    loading: false,
    message: "",
    data: [],
  },
  home_spor: {
    status: "warning",
    loading: false,
    message: "",
    data: [],
  },
  home_saglik: {
    status: "warning",
    loading: false,
    message: "",
    data: [],
  },
  home_bilim: {
    status: "warning",
    loading: false,
    message: "",
    data: [],
  },
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_NEWS_START":
      return { ...state, isLoading: true, message: "", status: "wait" };
    case "GET_NEWS_SUCCESS":
      return {
        ...state,
        news: action.payload,
        isLoading: false,
        status: "success",
      };
    case "GET_NEWS_ERROR":
      return {
        ...state,
        message: action.payload,
        isLoading: false,
        status: "error",
      };
    case "SET_LANG":
      return { lang: action.lang, country: action.country };
    case "GET_CATEGORY_START":
      return {
        ...state,
        category: { loading: true, message: "", status: "wait" },
      };
    case "GET_CATEGORY_SUCCESS":
      return {
        ...state,
        category: {
          name: action.name,
          data: action.payload,
          loading: false,
          status: "success",
        },
      };
    case "GET_CATEGORY_ERROR":
      return {
        ...state,
        category: { message: action.payload, loading: false, status: "error" },
      };
    case "SET_SEARCH_START":
      return {
        ...state,
        search: { loading: true, message: "", status: "wait" },
      };
    case "SET_SEARCH_SUCCES":
      return {
        ...state,
        search: { data: action.payload, loading: false, status: "success" },
      };
    case "SET_SEARCH_ERROR":
      return {
        ...state,
        search: { message: action.payload, loading: false, status: "error" },
      };
    case "GET_HOME_TEKNOLOJI_START":
      return {
        ...state,
        home_teknoloji: { loading: true, message: "", status: "wait" },
      };
    case "GET_HOME_TEKNOLOJI_SUCCES":
      return {
        ...state,
        home_teknoloji: {
          data: action.payload,
          loading: false,
          status: "success",
        },
      };
    case "GET_HOME_TEKNOLOJI_ERROR":
      return {
        ...state,
        home_teknoloji: {
          message: action.payload,
          loading: false,
          status: "error",
        },
      };
    case "GET_HOME_SPOR_START":
      return {
        ...state,
        home_spor: { loading: true, message: "", status: "wait" },
      };
    case "GET_HOME_SPOR_SUCCES":
      return {
        ...state,
        home_spor: {
          data: action.payload,
          loading: false,
          status: "success",
        },
      };
    case "GET_HOME_SPOR_ERROR":
      return {
        ...state,
        home_spor: {
          message: action.payload,
          loading: false,
          status: "error",
        },
      };
    case "GET_HOME_SAGLIK_START":
      return {
        ...state,
        home_saglik: { loading: true, message: "", status: "wait" },
      };
    case "GET_HOME_SAGLIK_SUCCES":
      return {
        ...state,
        home_saglik: {
          data: action.payload,
          loading: false,
          status: "success",
        },
      };
    case "GET_HOME_SAGLIK_ERROR":
      return {
        ...state,
        home_saglik: {
          message: action.payload,
          loading: false,
          status: "error",
        },
      };
    case "GET_HOME_BILIM_START":
      return {
        ...state,
        home_bilim: { loading: true, message: "", status: "wait" },
      };
    case "GET_HOME_BILIM_SUCCES":
      return {
        ...state,
        home_bilim: {
          data: action.payload,
          loading: false,
          status: "success",
        },
      };
    case "GET_HOME_BILIM_ERROR":
      return {
        ...state,
        home_bilim: {
          message: action.payload,
          loading: false,
          status: "error",
        },
      };
    default:
      return state;
  }
};
