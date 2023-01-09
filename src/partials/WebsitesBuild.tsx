/* eslint-disable */

import { GradientText, Section } from "astro-boilerplate-components";

const websiteData = [
  {
    id: 1,
    videoUrl: "/videos/Launchy.mp4",
    link: "https://launchy.me/",
    pageTitle: "Launchy.me",
  },
  {
    id: 2,
    videoUrl: "/videos/Fichap.mp4",
    link: "https://fichap.com/",
    pageTitle: "Fichap.com",
  },
  {
    id: 3,
    videoUrl: "/videos/ClearTech.mp4",
    link: "https://cleartechsite.vercel.app/",
    pageTitle: "Cleartech.com",
  },
  {
    id: 4,
    videoUrl: "/videos/Thinkweek.mp4",
    link: "https://thinkweek.company/",
    pageTitle: "Thinkweek.company",
  },
];

const WebsiteList = () => (
  <Section
    title={
      <>
        Recent{" "}
        <GradientText>
          projects built with stack Reactjs,tailwindcss,nodejs,graphql
        </GradientText>
      </>
    }
  >
    <div className="flex flex-row flex-wrap gap-6">
      {websiteData.map((item) => (
        <div key={item.id} className="bg-slate-800 w-[48%] rounded-md">
          <video src={item.videoUrl} autoPlay loop muted />
          <div className="w-[90%] mx-auto p-2 ">
            <p>
              Link: <a href={item.link}>{item.pageTitle}</a>
            </p>
          </div>
        </div>
      ))}
    </div>
    <p className="text-center mt-20 font-bold text-3xl ">
      <GradientText>
        I also can be very efficient using wordpress and elementor
      </GradientText>
    </p>
  </Section>
);

export { WebsiteList };
