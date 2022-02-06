import React from "react";

function Hata(props) {
  return (
    <div className="hata">
      <div className="karart"></div>
      <div className="uyari w-80 lg:w-6/12 bg-black h-auto lg:h-8/12 p-5 lg:p-10 rounded-2xl">
        <h1 className="font-bold text-3xl text-red-500">Olamaz Yine'mi! :(</h1>

        {props.message === "" ? (
          <p className="font-bold text-lg text-red-500">
            Burda bişey yok benimle iletişime geç.
          </p>
        ) : !props.message ? (
          <p className="font-bold text-lg text-red-500">
            Burda bişey yok benimle iletişime geç.
          </p>
        ) : (
          <p className="font-bold text-lg text-gray-300">
            {String(props.message)}
          </p>
        )}

        <a
          target="_blank"
          href="mailto:ibrahimodev42@gmail.com"
          rel="noopener nofollow noreferrer"
          className="bg-red-500 p-5 m-5 text-black flex items-center justify-center font-bold rounded-lg"
        >
          Mail Gönder!
        </a>
        <a
          target="_blank"
          href="https://github.com/ibodev1"
          rel="noopener nofollow noreferrer"
          className="bg-red-500 p-5 m-5 text-black flex items-center justify-center font-bold rounded-lg"
        >
          Github
        </a>
      </div>
    </div>
  );
}

export default Hata;
