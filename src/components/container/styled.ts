// import styled from 'styled-components/native';
import styled from 'styled-components/native';
import {PropsContainer} from './index';

export const ContainerElement = styled.View<PropsContainer>`
  flex: 1;
  flex-direction: ${({oriention}) => (oriention == 'row' ? 'row' : 'column')};
  justify-content: ${({horizontalAlignment}) =>
    horizontalAlignment ? horizontalAlignment : 'flex-start'};
  align-items: ${({alignItems}) => (alignItems ? alignItems : 'stretch')};
  background-color: ${({backGround, theme}) =>
    backGround ? theme.colors[backGround] : theme.colors.background};
`;
