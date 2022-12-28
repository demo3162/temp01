import React from "react";
import { Trackcard } from "./Trackcard";

export const Tracks = () => {
  return (
    <div className="text-white">
      <h1 className="text-center text-glow text-5xl md:text-6xl font-semibold text-white pb-8">
        tracks
      </h1>
      <div className="flex flex-col my-12 flex-wrap gap-10">
        <div className="flex flex-wrap justify-center p-4 gap-10">
          <Trackcard
            headingBg={"bg-red-500"}
            borderBg={"border-red-500"}
            text="Ed-Tech"
            para="Whether you teach remotely, instruct in-person classes, or are still in the process of earning your teaching credential, edtech can enhance curriculum and facilitate better learning outcomes for students at all grade levels. 
	
            This Hackathon is aimed at designing effective technology-enhanced solutions for learners all around the world. The expected outcome is to produce ideas and concepts with a high impact on society as well as ready-to-be-developed solutions. 
            "
          />
          <Trackcard
            headingBg={"bg-amber-400"}
            borderBg={"border-amber-400"}
            text="Fin-Tech"
            para="This year we will looking at ecosystems of financial applications that are built on top of blockchain networks.

            The main goal is to create an open-source, permissionless, and transparent financial service ecosystem that is available to everyone and operates without any central authority. In short, we can say it is available to everyone having internet connectivity.
            
            This is where you will unleash your skill. talent, amazing ideas, build teams and collaborate on game-changing products, disrupt the  industry and showcase your skill & talent. 
            "
          />
        </div>
        <div className="flex flex-wrap justify-center p-4 gap-10">
          <Trackcard
            headingBg={"bg-sky-500"}
            borderBg={"border-sky-500"}
            text="Blockchain"
            para="All the tech and investment nerds must have gone through this term once in their recent days, it is a technology which has a lot to explore and hold a potential for overhaul transformation of current data processing and managing process."
          />
          <Trackcard
            headingBg={"bg-green-500"}
            borderBg={"border-green-500"}
            text="Entertainment"
            para="The Entertainment track promotes the use of technology as a means of expression, encouraging hackers to explore the ways that we create, consume, and share content. Projects in this track will make the most of hackers’ interdisciplinary skills, perhaps by incorporating music, graphics, and other creative mediums, as well as keeping the user at the forefront of design."
          />
        </div>
        <div className="flex flex-wrap justify-center p-4 gap-10">
          <Trackcard
            headingBg={"bg-sky-500"}
            borderBg={"border-sky-500"}
            text="Web3"
            para="Web3 is need of Future. Blockchain and Cryptocurrency have been in the limelight for a while now. However, Web3 is a much larger field that aims to improve financial services by using software and emerging tech solutions."
          />
          <Trackcard
            headingBg={"bg-green-500"}
            borderBg={"border-green-500"}
            text="Healthcare"
            para="Each year millions of people face the reality of living with a mental illness. TH.0 is joining the international movement to raise awareness about mental health. This year we are supporting the fight against stigma and are partnering with those who provide support, education and advocate for policies that support people with mental illness and their families."
          />
        </div>
      
      </div>
    </div>
  );
};
