import React from "react";
import loading from "../img/loading-state.gif";
import * as moment from "moment";
import "moment/locale/tr";

function ShortNews({ haber }) {
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
  var kisabaslik = haber.title.substring(0, haber.title.length - 75) + "...";
  return (
    <li className="short_haber w-96 p-2 transform transition duration-300">
      <div className="haber w-full h-full transform transition duration-300">
        <div className="dark:bg-gray-100 w-full h-full relative p-1 lg:p-2 shadow-md overflow-hidden">
          <div className="bg-gray-500 h-64 overflow-hidden">
            <img
              className="h-64 rounded w-full object-cover object-center mb-6"
              src={haber.urlToImage ? haber.urlToImage : loading}
              alt={haber.source.name ? haber.source.name : "Haber Resmi"}
            />
          </div>

          <h3 className="tracking-widest flex justify-between text-red-500 text-xs mt-2 font-medium title-font mx-1">
            <div>{haber.source.name ? haber.source.name : haber.author}</div>
            <div className="text-left truncate ">
              {yayinlanma ? yayinlanma : date ? date : ""}
            </div>
          </h3>
          <a
            href={haber.url ? haber.url : "#"}
            target="_blank"
            rel="noopener nofollow noreferrer"
          >
            <p className="haber_title w-full text-base break-words align-middle text-gray-900 font-medium title-font leading-none m-1">
              {haber.title
                ? haber.title.length > 140
                  ? kisabaslik
                  : haber.title
                : "Başlığı alırken bir problem yaşandı!"}
            </p>
          </a>
        </div>
      </div>
    </li>
  );
}

export default ShortNews;
