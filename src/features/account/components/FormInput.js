import React from 'react';
import { windowHeight, windowWidth } from '../../../utils/Dimentions';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { View, TextInput } from 'react-native';
// import { AntDesign } from '@expo/vector-icons';
import styled from 'styled-components/native';

const FormInput = ({ labelValue, placeholderText, iconType, ...rest }) => {
    return (
        <InputContainer windowHeight={windowHeight}>
            <IconStyle>
                <AntDesign name={iconType} size={25} color="#666" />
            </IconStyle>
            <Input
                value={labelValue}
                placeholder={placeholderText}
                placeholderTextColor="#666"
                {...rest}
            />
        </InputContainer>
    );
};

export default FormInput;

const InputContainer = styled(View)`
    margin-top: 5px;
    margin-bottom: 10px;
    width: 100%;
    height: ${({ windowHeight }) => windowHeight / 15}px;
    border-color: #ccc;
    border-radius: 3px;
    border-width: 1px;
    flex-direction: row;
    align-items: center;
    background-color: #fff;
`;

const IconStyle = styled(View)`
    padding: 10px;
    height: 100%;
    justify-content: center;
    align-items: center;
    border-right-color: #ccc;
    border-right-width: 1px;
    width: 50px;
`;

const Input = styled(TextInput)`
    padding: 10px;
    flex: 1;
    font-size: 16px;
    font-family: Lato-Regular;
    color: #333;
    justify-content: center;
    align-items: center;
`;

// Additional styles not used in the component
const InputField = styled(TextInput)`
    padding: 10px;
    margin-top: 5px;
    margin-bottom: 10px;
    width: ${({ windowWidth }) => windowWidth / 1.5}px;
`;
