/* eslint-disable */

import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from "astro-boilerplate-components";

const ProjectList = () => (
  <Section
    title={
      <>
        Recent <GradientText>Jobs</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Frontend developer at chatcenter.net"
        description="Design and building the visual and interactive components of a webapp used like a chat admin dashboard.
        My daily tasks include:
        Design and improve app UI, Writing and maintaining HTML, CSS, and JavaScript code to build and style the user interface, Work with back end team to improve API ,
        Integrate UI with APIs and other back-end services to retrieve and display data,Optimize the performance and accessibility of the user interface

        "
        link="https://chatcenter.net/"
        img={{
          src: "/assets/images/speech_bubble_1.png",
          alt: "Project Web Design",
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>React.js</Tags>
            <Tags color={ColorTags.LIME}>UI design</Tags>
            <Tags color={ColorTags.SKY}>Bitbucket</Tags>
            <Tags color={ColorTags.ROSE}>SCSS</Tags>
            <Tags color={ColorTags.RED}>Team Work</Tags>
            <Tags color={ColorTags.LIME}>Antd v5</Tags>
          </>
        }
      />
      <Project
        name="Lead developer at Launchy"
        description="Leader and mentor of a front end dev teams,Set the technical direction and standards for the projects,review of code and feedback providing, project building in Nextjs and tailwindcss"
        link="/"
        img={{ src: "/assets/images/Rocket.png", alt: "Project Fire" }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>Next.js</Tags>
            <Tags color={ColorTags.EMERALD}>TailwindCSS</Tags>
            <Tags color={ColorTags.YELLOW}>JavaScript</Tags>
            <Tags color={ColorTags.EMERALD}>Project Management</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
