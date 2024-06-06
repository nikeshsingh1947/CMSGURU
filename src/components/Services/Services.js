import {
  faArrowRight,
  faBolt,
  faCheckCircle,
  faCloudArrowDown,
  faDatabase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import img from "./img/Service 24_7.gif";

const Services = () => {
  return (
    <section className="services mt-20 container mx-auto">
      <h1 className="text-center text-5xl font-semibold text-neutral-700">
        Our <span className="text-indigo-600">Services</span>
      </h1>

      <div className="flex items-center md:mx-0 mx-5 md:flex-row flex-col gap-20 mt-10">
        <img className="w-1/2" src={img} alt="" />

        <div>
          <h1 className="text-4xl mb-5 text-neutral-700 md:text-start text-center">
            Change the way you build Online presence
          </h1>

          <h1 className="text-neutral-500 md:text-start text-center">
          Revolutionize your website development experience. Empowering your digital presence with cutting-edge solutions, our skilled developers craft unparalleled online experiences
          </h1>

          <ul className="mt-5 text-neutral-500 font-bold">
            <li className="flex items-center gap-3 mb-2">
              <FontAwesomeIcon
                className="text-indigo-600"
                icon={faCheckCircle}
              ></FontAwesomeIcon>
              <h1>Web Development Solutions for Tomorrow</h1>
            </li>
            <li className="flex items-center gap-3 mb-2">
              <FontAwesomeIcon
                className="text-indigo-600"
                icon={faCheckCircle}
              ></FontAwesomeIcon>
              <h1>Our Talented & Experienced Developer</h1>
            </li>
            <li className="flex items-center gap-3 mb-2">
              <FontAwesomeIcon
                className="text-indigo-600"
                icon={faCheckCircle}
              ></FontAwesomeIcon>
              <h1>SEO (Search Engine Optimization)</h1>
            </li>
            <li className="flex items-center gap-3 mb-2">
              <FontAwesomeIcon
                className="text-indigo-600"
                icon={faCheckCircle}
              ></FontAwesomeIcon>
              <h1>Digital Marketing</h1>
            </li>
            <li className="flex items-center gap-3 mb-2">
              <FontAwesomeIcon
                className="text-indigo-600"
                icon={faCheckCircle}
              ></FontAwesomeIcon>
              <h1>Social Media Marketing</h1>
            </li>
            <li className="flex items-center gap-3 mb-2">
              <FontAwesomeIcon
                className="text-indigo-600"
                icon={faCheckCircle}
              ></FontAwesomeIcon>
              <h1>Product Photography</h1>
            </li>
            <li className="flex items-center gap-3 mb-2">
              <FontAwesomeIcon
                className="text-indigo-600"
                icon={faCheckCircle}
              ></FontAwesomeIcon>
              <h1>Personal Portfolio/Company Portfolio </h1>
            </li>
            <li className="flex items-center  gap-3 mb-2">
              <FontAwesomeIcon
                className="text-indigo-600"
                icon={faCheckCircle}
              ></FontAwesomeIcon>
              <h1>24Hour Support</h1>
            </li>
          </ul>
        </div>
      </div>

      <div className="md:mt-40 mt-10">
        <h1 className="text-center md:text-5xl text-4xl md:mx-0 mx-5 font-semibold text-neutral-700 leading-tight">
          Speed up your development <br /> with
          <span className="text-violet-600"> CMS GURU.</span>
        </h1>

        <div className="mt-20 grid md:grid-cols-3 place-content-center mx-20">
          <div className="text-center border-solid border-2 border-gray-300 py-10 px-5 w-80 rounded-lg hover:scale-105 ">
            <FontAwesomeIcon
              className="text-5xl text-indigo-600 "
              icon={faDatabase}
            ></FontAwesomeIcon>
            <h1 className="mt-5 font-bold text-xl text-neutral-600">
              End To End Encription
            </h1>
            <h1 className="text-neutral-500">
            Ensure the utmost security for your data with our website, featuring end-to-end encryption, safeguarding your information from end to end. Trust us for a secure online experience that prioritizes your privacy.
            </h1>
            <button className="bg-violet-600 text-white px-5 py-2 mt-5 rounded-md hover:bg-red-500">
              Learn More
              <FontAwesomeIcon
                className="ml-1"
                icon={faArrowRight}
              ></FontAwesomeIcon>
            </button>
          </div>
          <div className="text-center border-solid border-2 border-gray-300 py-10 px-5 w-80 rounded-lg hover:scale-105">
            <FontAwesomeIcon
              className="text-5xl text-indigo-600 "
              icon={faBolt}
            ></FontAwesomeIcon>
            <h1 className="mt-5 font-bold text-xl text-neutral-600">
              Fast Service
            </h1>
            <h1 className="text-neutral-500">
            Experience swift and efficient services with our commitment to fast turnaround times. Your satisfaction is our priority, and we ensure timely delivery without compromising on quality.
            </h1>
            <button className="bg-violet-600 text-white px-5 py-2 mt-5 rounded-md hover:bg-red-500">
              Learn More
              <FontAwesomeIcon
                className="ml-1"
                icon={faArrowRight}
              ></FontAwesomeIcon>
            </button>
          </div>
          <div className="text-center border-solid border-2 border-gray-300 py-10 px-5 w-80 rounded-lg  hover:scale-105 ">
            <FontAwesomeIcon
              className="text-5xl text-indigo-600 "
              icon={faCloudArrowDown}
            ></FontAwesomeIcon>
            <h1 className="mt-5 font-bold text-xl text-neutral-600">
              Cloude Computing
            </h1>
            <h1 className="text-neutral-500">
            Unlock unparalleled scalability and flexibility with our cutting-edge cloud computing solutions. Elevate your business operations by seamlessly harnessing the power of the cloud for enhanced efficiency and innovation.
            </h1>
            <button className="bg-violet-600 text-white px-5 py-2 mt-5 rounded-md hover:bg-red-500">
              Learn More
              <FontAwesomeIcon
                className="ml-1"
                icon={faArrowRight}
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
