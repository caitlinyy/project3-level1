import styled from "styled-components";

export const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  /* margin-top: 10%; */
  align-items: center;
  padding: 0 16px;

  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`;

export const InfoContainer = styled.div`
  width: 100%;
  /* margin-top: 10rem; */

  @media (min-width: 768px) {
    width: 49%;
  }
`;

export const Title = styled.h1`
  font-size: 48px;
  span {
    /* color:#2cb1bc; */
    color: ${(prop) => prop.theme.colors.primary};
  }
`;

export const Description = styled.p`
  color: ${(prop) => prop.theme.colors.gray};
  /* margin: 1.5rem 0; */
  margin: 24px 0;
  /* width: 40rem; */
  line-height: 2rem;
`;

export const HeroImageContainer = styled.div`
  width: 49%;
  height: 470px;
  position: relative;

  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;
