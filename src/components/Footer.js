import React from "react";
import logo from "../assets/logo.png";
import { footerLinks } from "../constant/constant";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDribbble,
  faFacebook,
  faInstagram,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const footer = () => {
  return (
    <div className="px-10 pt-5 bg-gray-200">
      <section className="flex gap-5 pb-10 flex-col md:flex-row ">
        <div className="">
          <img src={logo} alt="" width={100} />
          <p className="md:max-w-[300px] mb-8 text-sm text-gray-600">
            Dribble is the world's leading community for creatives to sharee,
            grow and get hired.{" "}
          </p>
          <div className="flex gap-3 text-gray-600">
            <FontAwesomeIcon icon={faDribbble} size="lg" />
            <FontAwesomeIcon icon={faTwitter} size="lg" />
            <FontAwesomeIcon icon={faFacebook} size="lg" />
            <FontAwesomeIcon icon={faInstagram} size="lg" />
            <FontAwesomeIcon icon={faPinterest} size="lg" />
          </div>
        </div>
        <div className="flex justify-between mt-[20px] md:mt-[40px] w-full flex-wrap flex-2">
          {footerLinks.map((data) => (
            <div>
              <p className="font-bold text-sm mb-2 mt-4 ">{data.title}</p>
              <ul>
                {data.links.map((links) => (
                  <li className="text-xs leading-6 text-gray-600">
                    {links.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="w-full flex flex-col md:flex-row items-center md:justify-between py-8 border-t border-gray-400">
        <p className="text-sm">2024 Dribbble. All rights reserved.</p>
        <p className="text-sm">
          <span className="font-bold">20,501,853 </span>shots dribbble
          <FontAwesomeIcon icon={faDribbble} />
        </p>
      </section>
    </div>
  );
};

export default footer;
