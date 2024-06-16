import styled from "styled-components";

export const StyledOAuth = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: #fa2626;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1.25rem;
  padding: 0.5rem 1rem;
  width: 100%;
  text-transform: uppercase;
  box-shadow: 0 1px 2px 0 rgb(0, 0, 0, 0.5);
  &:hover {
    background: red;
  }
  svg {
    margin-right: 10px;
    background-color: #fff;
    border-radius: 50%;
  }
`;
