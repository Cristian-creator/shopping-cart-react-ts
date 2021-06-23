import styled from "styled-components"

interface StyledHeroProps {
    myImage: string;
}

export const StyledHero = styled.div<StyledHeroProps>`
    background-image: url(${props => props.myImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 300px;
    // width: 100px;
`;