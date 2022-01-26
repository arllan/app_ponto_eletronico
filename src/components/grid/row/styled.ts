import styled from 'styled-components/native';
import {PropsContainer} from './index';
import {RFValue} from 'react-native-responsive-fontsize';

export const RowContainer = styled.View<PropsContainer>`
    width: 100%;
    padding-top: 0px;
    padding-bottom: 0px;
    padding-left: ${({padding}) => (padding ? padding : 0)}px;
    padding-right: ${({padding}) => (padding ? padding : 0)}px;
    flex-direction: ${({oriention}) => (oriention == 'row' ? 'row' : 'column')};
    justify-content: ${({horizontalAlignment}) =>
        horizontalAlignment ? horizontalAlignment : 'flex-start'};
    align-items: ${({alignItems}) => (alignItems ? alignItems : 'stretch')};
    background-color: ${({backGround, theme}) =>
        backGround ? theme.colors[backGround] : theme.colors.background};
`;

/* height: ${({height}) => (height ? RFValue(height) : RFValue(60))}px; */
/* flex-wrap: wrap; */
