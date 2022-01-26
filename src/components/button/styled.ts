import {RFValue} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../global/styles/theme';
import {TouchableOpacityProps} from 'react-native';

interface PropsButton extends TouchableOpacityProps {
    background: keyof typeof theme.colors;
}

type PropsText = {
    color: keyof typeof theme.colors;
};

export const ButtonStatus = styled.TouchableOpacity<PropsButton>`
    min-width: 10%;
    margin: 10px 10px 10px 10px;
    padding: 10px 10px 10px 10px;
    max-height: 60px;
    justify-content: center;
    align-items: center;
    background-color: ${({theme, background}) => theme.colors[background]};
    border-radius: 10px;
`;

export const TextButton = styled.Text<PropsText>`
    color: ${({theme, color}) => theme.colors[color]};
    font-size: ${RFValue(20)}px;
    font-weight: bold;
`;
