import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
        margin: 0;
    }
`;

export const BLUE001 = "#07A2D9";
export const BLUE002 = "#0760D9";

export const GREEN001 = "#BDD9CE";
