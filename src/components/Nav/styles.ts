import styled from "styled-components";

export const Container = styled.div`
    grid-area: NA;
    background-color: var(--primary);
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);

    display: flex;
    align-items: center;
`;

export const Title = styled.h1`
    color: rgba(255, 255, 255, 0.5);
    font-size: 35px;
    font-weight: 400;
`;

export const Logo = styled.img`
    height: 40px;
    width: 40px;
    margin: 0 10px
`;