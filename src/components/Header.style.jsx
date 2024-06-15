import styled from "styled-components";

export const StyledWrapper = styled.div`
  background: #fff;
  border-bottom: 1px solid #999;
  box-shadow: 0 1px 2px 0 rgb(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 50;
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline: 12px;
  max-width: 1052px;
  margin: auto;
  img {
    height: 1.25rem;
    cursor: pointer;
  }
  li {
    list-style: none;
    margin-inline: 10px;
    color: #777;
    font-weight: 500;
    border-bottom: 2px solid transparent;
    cursor: pointer;
    &:hover {
      color: #000;
      /* border-bottom: 2px solid red; */
    }
  }
  & .menuList {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
