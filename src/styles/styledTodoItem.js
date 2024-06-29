import styled from "styled-components";
import { BLUE001, BLUE002 } from "../GlobalStyle";

const Styles = {
  TodoItemWrapper: styled.li`
    width: 100%;
    height: 4rem;
    margin-bottom: 10px;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 4px solid ${BLUE002};
    border-radius: 10px;
    &:focus-visible {
      background-color: #cfcfcf;
    }
  `,

  ItemText: styled.span`
    font-size: 2rem;
  `,

  ButtonsWrapper: styled.div``,

  DeleteButton: styled.button`
    padding: 10px;
    border: 2px solid ${BLUE001};
    border-radius: 40%;
    background-color: transparent;
    margin-right: 10px;
    cursor: pointer;
  `,

  EditButton: styled.button`
    padding: 10px;
    border: 2px solid ${BLUE001};
    border-radius: 40%;
    background-color: transparent;
    cursor: pointer;
  `,

  EditInput: styled.input`
    border: none;
    margin: 40px 0;
    font-size: 2rem;
    border-radius: 12px;
    &:focus {
      outline: none;
    }
  `,
};

export default Styles;
