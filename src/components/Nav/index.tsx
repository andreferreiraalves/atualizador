import React from 'react';

import { Container, Title, Logo } from './styles';

import Logosrc from '../../assets/Logo.svg';

const Nav: React.FC = () => {
    return (
        <Container>
            <Logo src={Logosrc} />
            <Title>Atualizador</Title>

        </Container>
    );
}

export default Nav;