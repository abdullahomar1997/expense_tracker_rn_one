import React from 'react';
import { useFonts } from 'expo-font';
import Loading from '../components/Loading';

const FontLoader = ({ children }) => {
    const [fontsLoaded] = useFonts({
        'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
        'Kufam-SemiBoldItalic': require('../assets/fonts/Kufam-SemiBoldItalic.ttf'),
    });
    
    return !fontsLoaded ? <Loading message={"Loading fonts..."} /> : children;
};

export default FontLoader;
