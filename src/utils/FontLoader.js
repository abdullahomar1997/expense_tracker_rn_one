import React from 'react';
import { View, Text } from 'react-native';
import { useFonts } from 'expo-font';

const FontLoader = ({ children }) => {
    const [fontsLoaded] = useFonts({
        'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
        'Kufam-SemiBoldItalic': require('../assets/fonts/Kufam-SemiBoldItalic.ttf'),
    });

    if (!fontsLoaded) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text>Loading fonts...</Text>
            </View>
        );
    }

    return children;
};

export default FontLoader;
