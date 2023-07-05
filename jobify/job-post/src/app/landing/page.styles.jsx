"use client";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  background-color: ${(prop) => prop.theme.backgroundColor};
  min-height: 100vh;
`;
