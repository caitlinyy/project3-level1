"use client";
// 服务端渲染
import styled from "styled-components";

import Image from "next/image";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Navigation = styled.nav`
  height: 96px;
  display: flex;
  align-items: center;
  padding: 0 16px;
`;

const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
`;

// https://www.jobify.live/landing  http://localhost:3000/landing
const LandingPage = () => {
  return (
    <Container>
      <Navigation>
        <Image src="./logo.svg" width={164} height={50} alt="Picture of the author" />
      </Navigation>

      <section className="hero">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p className="description">
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue bottle single-origin coffee chia.
            Aesthetic post-ironic venmo, quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch narwhal.
          </p>
          <a href="#">Login/Register</a>
        </div>

        <div className="hero-img">
          <img src="./hero.svg" alt="herobg" />
        </div>
      </section>
    </Container>
  );
};

export default LandingPage;
