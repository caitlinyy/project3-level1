import {
  HeroContainer as Container,
  InfoContainer,
  Title,
  Description,
  HeroImageContainer,
} from "./HeroContainer.styles";
import Image from "next/image";
import Button from "components/Button/Button";

import Link from "next/link";

const HeroContainer = () => {
  return (
    <Container>
      <InfoContainer>
        <Title>
          Job <span>Tracking</span> App
        </Title>
        <Description>
          I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue bottle single-origin coffee chia. Aesthetic
          post-ironic venmo, quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch narwhal.
        </Description>
        {/* <Link href="/register">
          <Button>Login/Register</Button>
        </Link> */}
        {/* <Button as="a" href="/register">Login/Register</Button> */}
        <Button href="/register">Login/Register</Button>
      </InfoContainer>

      <HeroImageContainer>
        <Image src="./hero.svg" alt="heroBg" fill />
      </HeroImageContainer>
    </Container>
  );
};
export default HeroContainer;
