import React, { useContext, useState } from 'react';
import {
    View,
    ScrollView,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { primaryColor, globalStyle } from '../../../utils/GlobalStyle';
import Loading from '../../../components/Loading';
import {
    Container,
    CustomText,
    Header,
    NavButton,
    NavButtonText,
} from '../components/account.styles';
import { AuthenticationContext } from '../../../services/authentication.context';

const SignupScreen = ({ navigation }) => {
    const initialState = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    };

    const [data, setData] = useState(initialState);

    const { onRegister, isLoading, errMsg } = useContext(AuthenticationContext);

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
                    <Header>
                        <AntDesign
                            name="adduser"
                            size={25}
                            color={primaryColor}
                        />
                        <CustomText primaryColor={primaryColor}>
                            Create an account
                        </CustomText>
                    </Header>
                    <FormInput
                        onChangeText={text => handleChange('firstName', text)}
                        placeholderText="First Name"
                        iconType="form"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <FormInput
                        onChangeText={text => handleChange('lastName', text)}
                        placeholderText="Last Name"
                        iconType="form"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <FormInput
                        onChangeText={text => handleChange('email', text)}
                        placeholderText="Email"
                        iconType="mail"
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
                    <FormInput
                        onChangeText={text =>
                            handleChange('confirmPassword', text)
                        }
                        placeholderText="Confirm Password"
                        iconType="lock"
                        secureTextEntry={true}
                    />
                    {errMsg.trim().length !== 0 && (
                        <Text style={globalStyle.error}>{errMsg}</Text>
                    )}
                    <FormButton
                        buttonTitle="Sign Up"
                        onPress={() => onRegister(data)}
                    />
                    <NavButton onPress={() => navigation.goBack()}>
                        <NavButtonText primaryColor={primaryColor}>
                            Have an account? Sign In
                        </NavButtonText>
                    </NavButton>
                </Container>
            )}
        </>
    );
};
export default SignupScreen;
