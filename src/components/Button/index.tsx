import React from 'react';

import { ButtonStyle } from './styles';

import ForwardSrc from '../../assets/Forward.svg';
import PreviewSrc from '../../assets/Preview.svg';


export interface Props {
    caption: string;
    icon?: string;
}

const Button: React.FC<Props> = ({ caption, icon }) => {
    return (
        <ButtonStyle>{caption} <img src={icon === 'preview' ? PreviewSrc : ForwardSrc} />
        </ButtonStyle>
    );
}

export default Button;