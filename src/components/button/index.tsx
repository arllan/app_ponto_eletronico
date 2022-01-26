import React from 'react';
import theme from '../../global/styles/theme';
import {ButtonStatus, TextButton} from './styled';

type PropsButton = {
    title?: string;
    colorText: keyof typeof theme.colors;
    backgroundButton: keyof typeof theme.colors;
    onPress?(): void;
};

export function Button({
    title,
    colorText,
    backgroundButton,
    onPress,
    ...rest
}: PropsButton) {
    return (
        <ButtonStatus background={backgroundButton} {...rest} onPress={onPress}>
            <TextButton color={colorText}>{title}</TextButton>
        </ButtonStatus>
    );
}
