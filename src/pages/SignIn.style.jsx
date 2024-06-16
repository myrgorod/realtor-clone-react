import styled from "styled-components";

export const StyledSignIn = styled.section`
  font-size: large;
  text-align: center;
  margin-top: 1.5rem;
  & .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding-inline: 1.5rem;
    padding-block: 3rem;

    & .sign-img {
      max-width: 45%;
      /* margin-bottom: 3rem; */
    }
    & .sign-form {
      width: 45%;
      margin-left: 20px;

      & input {
        width: 94%;
        padding: 0.5rem 1rem;
        font-size: 1.25rem;
        color: grey;
        border: 1px solid lightgray;
        border-radius: 4px;
        outline: none;
        /* transition: all 2s ease-in-out; */
        margin-bottom: 1.5rem;
      }
      & .password-container {
        position: relative;
        /* background-color: red; */
      }
      & .icon {
        position: absolute;
        right: 0.75rem;
        top: 0.75rem;
        /* color: green; */
        cursor: pointer;
      }
      & .button-submit {
        border: none;
        border-radius: 4px;
        background: #3e56c2;
        color: #fff;
        font-size: 1.25rem;
        padding: 0.5rem 1rem;
        width: 100%;
        text-transform: uppercase;
        box-shadow: 0 1px 2px 0 rgb(0, 0, 0, 0.5);
        &:hover {
          background: blue;
        }
      }
    }
  }
  & .link-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .line-text {
    position: relative;
    text-align: center;
    margin: 20px 0;
  }

  .line-text::before,
  .line-text::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 45%;
    height: 1px;
    background-color: #757373;
  }

  .line-text::before {
    left: 0;
    margin-right: 10px;
  }

  .line-text::after {
    right: 0;
    margin-left: 10px;
  }

  img {
    width: 100%;
    border-radius: 1rem;
  }
`;
