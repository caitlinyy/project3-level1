import { HeroContainer, InfoContainer, Title, Description, HeroImageContainer } from "./HeroContainer.styles";
import Image from "next/image";
import Button from "components/Button/Button";

function HeroContainer (){
  return (
    <HeroContainer>
      <InfoContainer>
        <Title>
          Job <span>Tracking</span> App
        </Title>
        <Description className="description">
          I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue bottle single-origin coffee chia. Aesthetic
          post-ironic venmo, quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch narwhal.
        </Description>
        <Button href="#">Login/Register</Button>
      </InfoContainer>

      <HeroImageContainer>
        <Image src="./hero.svg" alt="heroBg" fill />
      </HeroImageContainer>
    </HeroContainer>
  );
};
export default HeroContainer;
