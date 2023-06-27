import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { primaryColor } from '../utils/GlobalStyle';
import { styled } from 'styled-components';

export const LoadingContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Loading = ({ message }) => {
    return (
        <View>
            <ActivityIndicator size="large" color={primaryColor} />
            {message !== undefined && (
                <Text style={{ color: '#A5A5A5' }}>{message}</Text>
            )}
        </View>
    );
};

export default Loading;
