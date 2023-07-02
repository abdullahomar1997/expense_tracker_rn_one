import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoryScreen from '../features/category/screens/CategoryScreen';
import ChartScreen from '../features/chart/screens/ChartScreen';
import HomeStack from './HomeStack';
import ReminderStack from './ReminderStack';
import TransactionStack from './TransactionStack';
import Loading, { LoadingContainer } from '../components/Loading';
import Sidebar from '../components/Sidebar';
import { ApplicationContext } from '../services/application.context';

const Drawer = createDrawerNavigator();

const AppStack = () => {
    const {loading} = useContext(ApplicationContext);

    if (loading) {
        return (
            <LoadingContainer>
                <Loading message="Fetching data..." />
            </LoadingContainer>
        );
    }

    return (
        <Drawer.Navigator
            initialRouteName="HomeStack"
            drawerContent={props => <Sidebar {...props} />}
        >
            <Drawer.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }}/>
            <Drawer.Screen name="Categories" component={CategoryScreen}/>
            <Drawer.Screen name="AllTransactions" component={TransactionStack} options={{ headerShown: false }}/>
            <Drawer.Screen name="ReminderStack" component={ReminderStack} options={{ headerShown: false }}/>                
            <Drawer.Screen name="Charts" component={ChartScreen}/>
        </Drawer.Navigator>
    );
};

export default AppStack;
