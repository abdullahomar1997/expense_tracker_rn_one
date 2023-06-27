import React from 'react';
import { TouchableOpacity } from 'react-native';
import { windowHeight } from '../../../utils/Dimentions';
import { primaryColor } from '../../../utils/GlobalStyle';
import styled from 'styled-components/native';

const FormButton = ({ buttonTitle, ...rest }) => {
    return (
        <ButtonContainer primaryColor={primaryColor} {...rest}>
            <ButtonText>{buttonTitle}</ButtonText>
        </ButtonContainer>
    );
};

export default FormButton;

const ButtonContainer = styled(TouchableOpacity)`
    margin-top: 10px;
    width: 100%;
    height: ${windowHeight / 15}px;
    background-color: ${({ primaryColor }) => primaryColor};
    padding: 10px;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
`;

const ButtonText = styled.Text`
    font-size: 18px;
    /* font-weight: bold; */
    color: #fff;
    font-family: Lato-Regular;
`;
