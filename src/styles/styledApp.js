import styled from "styled-components";
import { BLUE001, GREEN001 } from "../GlobalStyle";

const Styles = {
  Wrapper: styled.div`
    width: 100%;
    height: 100vh;
    padding: 0 20%;
    background-color: ${GREEN001};
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  Title: styled.h1`
    font-weight: bold;
    font-size: 3rem;
    margin-top: 80px;
  `,

  Input: styled.input`
    border: none;
    margin: 40px 0;
    font-size: 2rem;
    border-radius: 12px;
    padding: 15px;
    &:focus-visible {
      outline: none;
    }
  `,

  TodoWrapper: styled.ul`
    width: 100%;
    height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  Buttons: styled.ul`
    width: 100%;
    height: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 30px;
  `,

  Button: styled.button`
    height: 3rem;
    font-size: 2rem;
    background-color: transparent;
    border: 4px solid ${BLUE001};
    border-radius: 10px;
    cursor: pointer;
  `,
};

export default Styles;
