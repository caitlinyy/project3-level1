"use client";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 40px;
  background-color: white;
  border-radius: ${(prop) => prop.theme.borderRadius};
  max-width: 400px;
  width: 90vw;

  border-top: 5px solid ${(prop) => prop.theme.colors.primary};
`;
