/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import { ApplyWithDevfolioBtn } from "../ApplyWithDevfolioBtn/ApplyWithDevfolioBtn";
import Logo from "../../public/images/logo.png";
import DevfolioWhite from "../../public/images/devfolio-white.svg";
import MainImage from "../../public/images/main-img.png";
import { motion } from "framer-motion";
import { JoinDiscordBtn } from "../JoinDiscordBtn/JoinDiscordBtn";

export const Main = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
    },
  };
  return (
    <>
      <motion.main
        initial="hidden"
        whileInView="show"
        variants={container}
        viewport={{ once: true, amount: 0.4 }}
        className="text-white mt-22 pt-10 z-20 "
        id="main-page"
      >
        <div className="max-w-[20rem] md:max-w-[30rem] mx-auto">
          <Image
            height={Logo.height}
            width={Logo.width}
            src={Logo}
            loading="eager"
            alt="logo"
            priority
          />
        </div>
        <h1 className="text-center text-glow text-lg mb-4 md:text-2xl font-semibold">
          Think. Build. Innovate.
        </h1>
        <h1 className="text-center text-glow text-lg mb-4 md:text-3xl font-semibold">
          Feb 1st - 2nd, 2023 &#x2022; GLBITM
        </h1>
        <div className="flex items-center justify-center gap-2 my-2">
          <div className="flex items-center w-50 gap-1">
            
            <p className="font-semibold text-lg md:text-xl">Shrinik Club | GLBITM |</p>
          </div>
          <Image
            width={110}
            height={30}
            src={DevfolioWhite}
            alt="devfolio-logo"
          />
        </div>
        <div className="flex flex-wrap justify-center my-6 gap-4">
          <ApplyWithDevfolioBtn />
          <JoinDiscordBtn />
        </div>
      </motion.main>
      <div className="-mt-20">
        <Image
          height={500}
          width={2000}
          className="md lg:-mt-80"
          src={MainImage}
          alt="main-img"
          loading="eager"
          priority
        />
      </div>
    </>
  );
};
