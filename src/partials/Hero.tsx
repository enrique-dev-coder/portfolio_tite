/* eslint-disable */

import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from "astro-boilerplate-components";

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Tite, Frontend dev</GradientText>👋
        </>
      }
      description={
        <>
          Hello and welcome to my portfolio website! My name is{" "}
          <b className=" text-cyan-400">
            Enrique Alvarado , my friends call me Tite
          </b>{" "}
          and I am a frontend developer with a passion for creating visually
          stunning and user-friendly websites and applications. I have had the
          opportunity to work with a variety of clients and technologies, and
          have developed a strong set of skills in{" "}
          <b className=" text-cyan-400">
            {" "}
            javascript frameworks,html,css, UI design and problem solving.
          </b>{" "}
        </>
      }
      avatar={
        <img
          className="h-80 w-80 rounded-full"
          src="/assets/images/tite_avatar.jpg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://wa.link/1fe8ng">
            <HeroSocial
              src="/assets/images/whatsapp_icon.png"
              alt="Whatsapp icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
