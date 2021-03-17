import React from 'react';

import { Container } from './styles';

import CheckBox from '../CheckBox';
import Button from '../Button';

const OptionsList: React.FC = () => {
    return (
        <Container>
            <CheckBox caption="Menu" />
            <CheckBox caption="ProcTrig" />
            <CheckBox caption="Inicia Versão" />
            <CheckBox caption="Apaga Procedures" />
            <CheckBox caption="Apaga Trigger" />

            <div className="buttons">
                <Button caption="Preview" icon="preview" />
                <Button caption="Atualizar" />
            </div>
        </Container>
    );
}

export default OptionsList;