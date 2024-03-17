


"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>SAP (ERP, MRP, CRM)</li>
        <li>Warehouse Management System</li>
        <li>Value Stream Mapping</li>
        <li>Logistic Management</li>
        <li>Lean</li>
        <li>Global Supplu chain</li>
      </ul>
    ),
  },
  {
    title: "Soft Skills",
    id: "Soft Skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Software",
    id: "Software",
    content: (
      <ul className="list-disc pl-2">
        <li>Demand Forecasting</li>
        <li>Cloud Computing</li>
        <li>MS Office</li>
        <li>MS Word</li>
        <li>MS Powerpoint</li>
        <li>Salesforce</li>
        <li>Power BI</li>
        <li>MS Excel</li>
        <li>Tableau</li>
      </ul>
    ),
  },
  {
    title: "Programming",
    id: "Programming",
    content: (
      <ul className="list-disc pl-2">
        <li>SQL</li>
        <li>R Programming</li>
        <li>Python</li>
        <li>MATLAB</li>
      </ul>
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
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am an Engineering Management Master I&apos;s 
            graduate from Northeastern University, with a keen focus on 
            Supply Chain Management. My technical expertise spans SAP, 
            Warehouse Management Systems, and data analytics using tools 
            like SQL, R, Python, and MATLAB. Through internships in Bengaluru 
            and Chennai, I I&apos;ve effectively enhanced supply chain efficiencies, 
            demonstrating my ability to innovate and solve complex problems. 
            My projects, such as the development of a navigation app for national 
            parks and a multitasking agricultural robot, highlight my entrepreneurial 
            spirit and problem-solving skills. My commitment to applying technology 
            for operational excellence positions me as a valuable asset in engineering 
            management and supply chain optimization.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Supply Chain{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Software")}
              active={tab === "Software"}
            >
              {" "}
              Software{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Soft Skills")}
              active={tab === "Soft Skills"}
            >
              {" "}
              Soft Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("Programming")}
              active={tab === "Programming"}
            >
              {" "}
              Programming{" "}
            </TabButton>
            
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

