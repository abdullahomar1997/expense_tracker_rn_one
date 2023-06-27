import React, { useContext, useState } from 'react';
import { Text } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { primaryColor, globalStyle } from '../../../utils/GlobalStyle';
import Loading from '../../../components/Loading';
import {
    Container,
    CustomText,
    ForgotButton,
    Logo,
    NavButtonText,
} from '../components/account.styles';
import { AuthenticationContext } from '../../../services/authentication.context';

const LoginScreen = ({ navigation }) => {
    let initialState = { email: '', password: '' };

    const [data, setData] = useState(initialState);

    const { onLogin, isLoading, errMsg } = useContext(AuthenticationContext);

    const handleChange = (key, value) => {
        setData({ ...data, [key]: value });
    };

    return (
        <>
            {isLoading ? (
                <Container>
                    <Loading />
                </Container>
            ) : (
                <Container>
                    <Logo source={require('../../../assets/images/logo.png')} />
                    <CustomText primaryColor={primaryColor}>
                        Expense Tracker
                    </CustomText>

                    <FormInput
                        onChangeText={text => handleChange('email', text)}
                        placeholderText="Email"
                        iconType="user"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <FormInput
                        onChangeText={text => handleChange('password', text)}
                        placeholderText="Password"
                        iconType="lock"
                        secureTextEntry={true}
                    />

                    {errMsg.trim().length !== 0 && (
                        <Text style={globalStyle.error}>{errMsg}</Text>
                    )}

                    <FormButton
                        buttonTitle="Sign In"
                        onPress={() => onLogin(data)}
                    />

                    <ForgotButton
                        onPress={() => navigation.navigate('Sign-up')}
                    >
                        <NavButtonText primaryColor={primaryColor}>
                            Don't have an acount? Create here
                        </NavButtonText>
                    </ForgotButton>
                </Container>
            )}
        </>
    );
};

export default LoginScreen;
