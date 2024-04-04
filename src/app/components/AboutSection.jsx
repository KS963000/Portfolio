"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="flex justify-between">
        <div>
          <ul className="list-disc pl-2">
            <li>Next.js</li>
            <li>React</li>
            <li>Express.js</li>
            <li>Node.js</li>
            <li>jQuery</li>
            <li>AngularJS</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div>
          <ul className="list-disc pl-2">
            <li>C/C++</li>
            <li>Java</li>
            <li>HTML CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>MongoDB</li>
            <li>PostgreSQL</li>
          </ul>
        </div>
        <div>
          <ul className="list-disc pl-2">
            <li>MySQL</li>
            <li>VS Code</li>
            <li>Git/GitHub</li>
            <li>Postman</li>
            <li>Cloudflare</li>
            <li>AWS</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white lg:mt-60 md:mt-40 mt-20" id="about">
      <h2 className="text-4xl font-bold text-white mb-4 text-center ">
        About Me
      </h2>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-6 xl:px-16">
        <Image src="/images/about-image.png" alt="about" width={500} height={500} />
        <div className=" md:mt-0 text-left flex flex-col h-full">
          <p className="text-base lg:text-xl sm: mt-10">
            I'm all about creating awesome websites and applications. I love learning
            new tech and collaborating with others to make cool stuff happen.
            From design to backend, I'm into every aspect of web development. If
            you need a dedicated developer who's ready to dive in and make
            things happen, let's chat! I'm all about using tech to create
            innovative solutions together.
          </p>
          <div className="flex flex-row text-xl justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
          </div>
          <div className="mt-8 text-xl">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
