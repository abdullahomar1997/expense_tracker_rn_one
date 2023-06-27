import React, { useContext, useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Loading from './components/Loading';
import AuthStack from './navigation/AuthStack';
import AppStack from './navigation/AppStack';
import styled from 'styled-components/native';
import { AuthenticationContext } from './services/authentication.context';

const Index = () => {
    const [loading, setLoading] = useState(false);
    const { token } = useContext(AuthenticationContext);

    if (loading) {
        return (
            <LoadingContainer>
                <LoadingText>Loading fonts...</LoadingText>
            </LoadingContainer>
        );
    }

    return (
        <NavigationContainer>
            {token !== null ? <AuthStack /> : <AppStack />}
        </NavigationContainer>
    );
};

export default Index;

export const LoadingContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const LoadingText = styled.Text`
    font-size: 18px;
    color: #333;
`;
