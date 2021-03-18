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
            <label>{caption}</label>
            <input type={type ?? "text"} />
        </Container>
    );
}

export default Input;