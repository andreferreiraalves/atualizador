import React from 'react';

import { Container } from './styles';

export interface Props {
    pwidth?: number;
    caption?: string;
    type?: string;
}

const Input: React.FC<Props> = ({
    pwidth,
    caption,
    type
}) => {
    return (
        <Container
            pwidth={pwidth}>
            <label htmlFor="id-input">{caption}</label>
            <input type={type ?? "text"} id="id-input" />
        </Container>
    );
}

export default Input;