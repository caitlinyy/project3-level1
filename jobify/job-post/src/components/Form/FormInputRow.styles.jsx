"use client";
const { styled } = require("styled-components");

export const Container = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  text-transform: capitalize;
  display: block;
  margin-top: 8px;
`;

export const Input = styled.input`
  border-radius: ${(prop) => prop.theme.borderRadius};
  border: 1px solid ${(prop) => prop.theme.colors.gray};
  background-color: #f0f4f8;
  display: block;
  height: 35px;
  padding: 0 8px;
  margin: 8px 0;
  width: 100%;

  &:focus {
    border: 1px solid black;
  }
`;
