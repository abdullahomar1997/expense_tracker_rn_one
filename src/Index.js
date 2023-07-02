import React, { useContext, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigation/AuthStack';
import AppStack from './navigation/AppStack';
import styled from 'styled-components/native';
import { AuthenticationContext } from './services/authentication.context';
import Loading, { LoadingContainer } from './components/Loading';

const Index = () => {
    const [loading, setLoading] = useState(false);
    const { token } = useContext(AuthenticationContext);

    if (loading) {
        return (
            <LoadingContainer>
                <Loading>Loading fonts...</Loading>
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