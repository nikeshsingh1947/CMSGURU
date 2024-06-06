import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMailBulk, faContactBook } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import img from "./img/Digital Marketiing.gif";
import "./Header.css"
const Header = () => {
  return (
    <section className="header container mt-20  mx-auto flex justify-between items-center md:flex-row flex-col-reverse gap-5">
      <div>
        <h1 className="md:text-6xl md:mt-0 md:text-start text-4xl mt-5 text-center font-semibold text-neutral-700">
          The Future Of <br />
          <span className="text-indigo-600">Digital Growth</span> Is Here
        </h1>
        <h1 className="text-neutral-700 font-medium mt-5 md:text-start md:mx-0 mx-10 text-center">
        Revolutionary Web Design with a Pinch of Imagination. <br /> We don't just create stunning websites. we strategically<br/> design experiences that turn visitors into loyal customers.<br/> With a focus on digital marketing, social media, and SEO,<br/> we amplify your online presence. Our expertise extends to<br/> impactful product photography and dynamic vlog shoots,<br/> ensuring your brand stands out in the digital landscape.
        </h1>

        <div className="flex gap-5 mt-10 md:justify-start justify-center">
          <Link to="hire">
            <button className="bg-indigo-600 text-white text-xl px-8 py-2 rounded-lg hover:animate-pulse">
              <FontAwesomeIcon
                className="mr-2"
                icon={faMailBulk}
              ></FontAwesomeIcon>
              Hire us
            </button>
          </Link>

          <Link to="contact">
            <button className="text-indigo-600 text-xl px-8 py-2 rounded-lg border-indigo-600 border-solid border-2 hover:animate-pulse">
              <FontAwesomeIcon
                className="mr-2"
                icon={faContactBook}
              ></FontAwesomeIcon>
              Contract
            </button>
          </Link>
        </div>
      </div>

      <div id="header-gif">
        <img className="" src={img} alt="" />
      </div>
    </section>
  );
};

export default Header;
