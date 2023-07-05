"use client";
import styled from "styled-components";
import Button from "../../components/Button/Button";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(prop) => prop.theme.backgroundColor};
`;

export const FormTitle = styled.h2`
  font-size: 32px;
  margin: 16px 0;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

export const StyledButton = styled(Button)`
  width: 100%;
  margin: 8px 0;

  ${(prop) =>
    prop.variant === "text" &&
    `
    width:20%;
    font-size:1rem;
    margin: 5px 0;
    }

  `}
`;

export const MemberSwitchContainer = styled.p`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1rem;
`;
