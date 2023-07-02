import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../features/home/screens/HomeScreen';
import AddTransactionScreen from '../features/home/screens/AddTransactionScreen';
import NavigationDrawerToggle  from '../components/NavigationDrawerToggle ';
import AllTransactionsScreen from '../features/home/screens/AllTransactionsScreen';
import CategoryScreen from '../features/category/screens/CategoryScreen';

const Stack = createNativeStackNavigator();


const HomeStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={({ navigation }) => {
                    return {
                        title: 'Home',
                        headerLeft: () => <NavigationDrawerToggle navigation={navigation} />
                    };
                }}
            />
            <Stack.Screen name="AddTransactionScreen" component={AddTransactionScreen} options={({ route }) => ({ title: route.params.name })}/>
            <Stack.Screen name="CategoryScreen" component={CategoryScreen} options={{ title: 'Add Category' }}/>
            <Stack.Screen name="AllTransactionsScreen" component={AllTransactionsScreen} options={{ title: 'Transactions' }}/>
        </Stack.Navigator>
    );
};

export default HomeStack;
