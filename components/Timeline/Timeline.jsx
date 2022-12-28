import React from "react";
import { TimelineCard } from "./TimelineCard";
import { TimelineDay } from "./TimelineDay";
import { motion } from "framer-motion";

export const Timeline = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.35,
      },
    },
  };
  return (
    <div className="mx-auto md:flex md:gap-20" id="timeline">
      <h1 className="text-center text-glow md:self-center text-5xl md:text-6xl font-semibold text-white pb-8">
        timeline
      </h1>
      <div>
        <div className="text-white mt-6 mx-auto">
          <motion.ol
            initial="hidden"
            whileInView="show"
            variants={container}
            viewport={{ once: true, amount: 0.4 }}
            className="relative border-l border-gray-200"
          >
            <TimelineCard
              heading={"Registration Starts"}
              timing={"15th January, 2023"}
              dotColor={"bg-[#4283F3]"}
              E94336
            />
            <TimelineCard
              heading={"Registration Ends"}
              timing={"30th January, 2023"}
              dotColor={"bg-[#E94336]"}
            />
          </motion.ol>
        </div>
        <div className="text-white mt-6 mx-auto" id="timeline">
          <motion.ol
            initial="hidden"
            whileInView="show"
            variants={container}
            viewport={{ once: true, amount: 0.4 }}
            className="relative border-l border-gray-200"
          >
            <TimelineDay day={1} date={"1st February, 2023"} />
            <TimelineCard
              heading={"Team Check-In and Opening Ceremony"}
              timing={"9AM to 10AM"}
              dotColor={"bg-[#FABB08]"}
            />
            <TimelineCard
              heading={"Hacking Starts!"}
              timing={"10AM to 5PM"}
              dotColor={"bg-[#00A150]"}
            />
            <TimelineDay day={2} date={"2nd February, 2023"} />
            <TimelineCard
              heading={"Hacking Continues"}
              timing={"9AM to 12PM"}
              dotColor={"bg-[#E94336]"}
            />
            <TimelineCard
              heading={"Preliminary Round of Judging"}
              timing={"12PM to 2PM"}
              dotColor={"bg-[#4283F3]"}
            />
            <TimelineCard
              heading={"Presentations From Top 20 Teams"}
              timing={"3PM to 5PM"}
              dotColor={"bg-[#FABB08]"}
            />
            <TimelineCard
              heading={"Closing Ceremony!"}
              timing={"5PM to 5:30PM"}
              dotColor={"bg-[#00A150]"}
            />
          </motion.ol>
        </div>
      </div>
    </div>
  );
};
