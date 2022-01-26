import React from 'react';
import {RowContainer} from './styled';
import theme from '@arllan/global/styles/theme';

export type PropsContainer = {
    children?: any;
    backGround?: keyof typeof theme.colors;
    oriention?: 'row' | 'column';
    padding?: number;
    // height?: number;
    horizontalAlignment?:
        | 'space-around'
        | 'space-between'
        | 'space-evenly'
        | 'flex-end'
        | 'flex-start'
        | 'center';
    alignItems?: 'stretch' | 'baseline' | 'center' | 'flex-end' | 'flex-start';
};

export function Row({
    children,
    backGround,
    oriention,
    horizontalAlignment,
    alignItems,
    padding = 0,
    // height = 60,
    ...rest
}: PropsContainer) {
    return (
        <RowContainer
            backGround={backGround}
            oriention={oriention}
            horizontalAlignment={horizontalAlignment}
            alignItems={alignItems}
            padding={padding}
            // height={height}
            {...rest}>
            {children}
        </RowContainer>
    );
}
