import styled from "styled-components";

export const Container = styled.div`
    grid-area: OP;
    background-color: var(--secundary);
    box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;

    .buttons {
        display: flex;
        margin: 20px;
    }

    .buttons button {
        margin-right: 20px;
    }
`;