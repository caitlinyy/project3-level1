"use client";
import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${(prop) => prop.theme.colors.primary};
  color: white;
  font-size: 1.25rem;
  border: none;
  padding: 0.5rem 1.25rem;
  border-radius: ${(prop) => prop.theme.borderRadius};
  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
    background-color: #0e7c86;
  }

  ${(prop) =>
    prop.variant === "secondary" &&
    `
    background-color:${prop.theme.colors.secondary};
    color:${prop.theme.colors.primary}
  `}

  ${(prop) =>
    prop.variant === "text" &&
    `
    background-color:rgba(0,0,0,0);
    color:${prop.theme.colors.primary};
    padding:0;

    &:hover{
      background-color:rgba(0,0,0,0);
      box-shadow:0 0 0 0 ;
      color:#0e7c86;
    }

  `}
`;
