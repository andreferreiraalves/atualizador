import styled from "styled-components";

// NA - Nav Bar
// OP - Options
// PD - Programer data
// SC - Script

export const Grid = styled.div`
    display: grid;

    grid-template-columns: 1fr 6fr;
    grid-template-rows: 60px auto;

    grid-template-areas: 
        'NA NA'
        'OP PD';

    height: 100vh;
`;