import React from 'react';

import { Container } from './styles';

import CheckBox from '../CheckBox';

const OptionsList: React.FC = () => {
    return (
        <Container>
            <CheckBox caption="Menu" />
            <CheckBox caption="ProcTrig" />
            <CheckBox caption="Inicia Versão" />
            <CheckBox caption="Apaga Procedures" />
            <CheckBox caption="Apaga Trigger" />
        </Container>
    );
}

export default OptionsList;