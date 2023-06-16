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
`;