"use client";
// 服务端渲染
// import styled from "styled-components";

// import Image from "next/image";

// import Button from "components/Button/Button";

import { Container } from "./page.styles";
// const Container = styled.div`
//   max-width: 1200px;
//   margin: 0 auto;
//   background-color: #f0f4f8;
// `;

import { Navigation } from "components/Navigation/Navigation.styles";
// const Navigation = styled.nav`
//   height: 96px;
//   display: flex;
//   align-items: center;
//   padding: 0 16px;
// `;

import HeroContainer from "components/HeroContainer/HeroContainer";
// const HeroContainer = styled.section`
//   display: flex;
//   justify-content: space-between;
//   /* margin-top: 10%; */
//   align-items: center;
//   padding: 0 16px;

//   position: absolute;
//   left: 0;
//   right: 0;
//   top: 0;
//   bottom: 0;
// `;

// const InfoContainer = styled.div`
//   width: 100%;
//   /* margin-top: 10rem; */

//   @media (min-width: 768px) {
//     width: 49%;
//   }
// `;

// const Title = styled.h1`
//   font-size: 48px;
//   span {
//     /* color:#2cb1bc; */
//     color: ${(prop) => prop.theme.colors.primary};
//   }
// `;

// const Description = styled.p`
//   color: ${(prop) => prop.theme.colors.gray};
//   /* margin: 1.5rem 0; */
//   margin: 24px 0;
//   /* width: 40rem; */
//   line-height: 2rem;
// `;

// const HeroImageContainer = styled.div`
//   width: 49%;
//   height: 470px;
//   position: relative;

//   display: none;

//   @media (min-width: 768px) {
//     display: block;
//   }
// `;

import Logo from "components/Logo/Logo";
import { useAppContext } from "context/appContext";

// https://www.jobify.live/landing  http://localhost:3000/landing
const LandingPage = () => {
  // const { state } = useAppContext();
  // console.log(state);

  return (
    <Container>
      <Navigation>
        {/* <Image src="./logo.svg" width={164} height={50} alt="Picture of the author" /> */}
        <Logo />
      </Navigation>

      <HeroContainer />

      {/* <HeroContainer>
        <InfoContainer>
          <Title>
            Job <span>Tracking</span> App
          </Title>
          <Description className="description">
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue bottle single-origin coffee chia.
            Aesthetic post-ironic venmo, quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch narwhal.
          </Description>
          <Button href="#">Login/Register</Button>
        </InfoContainer>

        <HeroImageContainer>
          <Image src="./hero.svg" alt="heroBg" fill />
        </HeroImageContainer>
      </HeroContainer> */}
    </Container>
  );
};

export default LandingPage;
