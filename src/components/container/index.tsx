import React from 'react';
import {ContainerElement} from './styled';
import theme from '@arllan/global/styles/theme';

export type PropsContainer = {
    children?: any;
    backGround?: keyof typeof theme.colors;
    oriention?: 'row' | 'column';
    horizontalAlignment?:
        | 'space-around'
        | 'space-between'
        | 'space-evenly'
        | 'flex-end'
        | 'flex-start'
        | 'center';
    alignItems?: 'stretch' | 'baseline' | 'center' | 'flex-end' | 'flex-start';
};

export function Container({
    children,
    backGround,
    oriention,
    alignItems,
    horizontalAlignment,
    ...rest
}: PropsContainer) {
    return (
        <ContainerElement
            backGround={backGround}
            oriention={oriention}
            horizontalAlignment={horizontalAlignment}
            alignItems={alignItems}
            {...rest}>
            {children}
        </ContainerElement>
    );
}
