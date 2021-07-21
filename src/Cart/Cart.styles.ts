import styled from "styled-components";
import { WrapperPropsType } from "../utils/types";

const widthsObj = {
    "small": "210px",
    "medium": "310px",
    "big": "400px"
};

export const Wrapper = styled.aside`
    font-family: Arial, Helvetica, sans-serif;
    width:  ${(props: WrapperPropsType) => widthsObj[props.size]};
    padding: 20px;
`;