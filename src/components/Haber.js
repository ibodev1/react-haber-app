import React from "react";
import loading from "../img/loading-state.gif";
import * as moment from "moment";
import "moment/locale/tr";

function Haber({ haber }) {
  moment.locale("tr");
  const zeroPad = (num) => {
    return num.toString().padStart(2, "0");
  };
  let parse = Date.parse(haber.publishedAt);
  const today = new Date(parse);
  let day = zeroPad(today.getDay());
  let month = zeroPad(today.getMonth());
  let year = today.getFullYear();
  let h = zeroPad(today.getHours());
  let m = zeroPad(today.getMinutes());
  let s = zeroPad(today.getSeconds());
  var date = year + "-" + month + "-" + day + " " + h + ":" + m + ":" + s;
  var yayinlanma = moment(parse).startOf("hours").fromNow();
  var kisabaslik = haber.title.substring(0, haber.title.length - 50) + "...";
  return (
    <div className="haber xl:w-1/3 lg:w-1/2 md:w-1/2 p-2 transform  hover:scale-105 transition duration-300">
      <div className="bg-white dark:bg-gray-100 w-full h-full relative p-6 rounded-lg overflow-hidden">
        <div className="bg-gray-500 lg:h-60  xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72">
          <img
            className="lg:h-60  xl:h-56 md:h-64 sm:h-72 xs:h-72 h-72  rounded w-full object-cover object-center mb-6"
            src={haber.urlToImage ? haber.urlToImage : loading}
            alt={haber.source.name ? haber.source.name : "Haber Resmi"}
          />
        </div>

        <h3 className="tracking-widest flex justify-between text-red-500 text-xs mt-5 font-medium title-font">
          <div>{haber.source.name ? haber.source.name : haber.author}</div>
          <div>{yayinlanma ? yayinlanma : date ? date : ""}</div>
        </h3>
        <a
          href={haber.url ? haber.url : "#"}
          target="_blank"
          rel="noopener nofollow noreferrer"
          className="haber-title text-base text-ellipsis text-gray-900 font-medium title-font mb-4"
        >
          {haber.title
            ? haber.title.length > 140
              ? kisabaslik
              : haber.title
            : "Başlığı alırken bir problem yaşandı!"}
        </a>
      </div>
    </div>
  );
}

export default Haber;
