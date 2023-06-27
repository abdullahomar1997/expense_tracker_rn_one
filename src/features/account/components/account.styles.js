import styled from 'styled-components/native';
import { primaryColor, globalStyle } from '../../../utils/GlobalStyle';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';

export const NavButton = styled(TouchableOpacity)`
    margin-top: 15px;
`;

export const Container = styled.View`
    background-color: #f9fafd;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

export const Header = styled.View`
    flex-direction: row;
    margin-bottom: 10px;
    align-items: center;
`;

export const CustomText = styled.Text`
    font-family: Kufam-SemiBoldItalic;
    font-size: 25px;
    margin-left: 5px;
    color: ${({ primaryColor }) => primaryColor};
    /* color: primaryColor; */
`;

export const NavButtonText = styled.Text`
    font-size: 18px;
    font-weight: 500;
    color: ${({ primaryColor }) => primaryColor};
    font-family: Lato-Regular;
    /* color: primaryColor; */
`;

export const Logo = styled(Image)`
    height: 120px;
    width: 120px;
    resize-mode: cover;
`;

export const ForgotButton = styled(TouchableOpacity)`
    margin-vertical: 35px;
`;
