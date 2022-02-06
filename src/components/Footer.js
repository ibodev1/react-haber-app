import React from "react";

function Footer() {
  return (
    <div className=" pt-4 sm:pt-10 lg:pt-12">
      <footer className="max-w-screen px-4 md:px-8 mx-auto">
        <div className="flex flex-col items-center border-t pt-0"></div>
        <div className="text-gray-500 text-sm text-center mt-4 mb-1">
          © 2022 - Developed by{" "}
          <a
            target="_blank"
            rel="noopener nofollow noreferrer"
            href="http://github.com/ibodev1"
          >
            ibodev1
          </a>
        </div>
        <div className="text-gray-500 text-sm text-center mb-4">
          API{" "}
          <a
            target="_blank"
            rel="noopener nofollow noreferrer"
            href="https://newsapi.org/"
          >
            NewsAPI
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
