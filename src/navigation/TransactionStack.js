import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddTransactionScreen from '../features/home/screens/AddTransactionScreen';
import DrawerIcon from '../components/NavigationDrawerToggle ';
import AllTransactionsScreen from '../features/home/screens/AllTransactionsScreen';
import { ApplicationContext } from '../services/application.context';

const Stack = createNativeStackNavigator();

const TransactionStack = () => {

    const {
        
        updateTransaction,
        deleteTransaction,
        categories,
        transactions
        
    } = useContext(ApplicationContext);

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="AllTransactionsScreen"
                options={({ navigation }) => {
                    return {
                        title: 'Transaction History',
                        headerLeft: () => (
                            <DrawerIcon navigation={navigation} />
                        ),
                    };
                }}
            >
                {props => (
                    <AllTransactionsScreen
                        allTransactions={transactions}
                        deleteTransaction={deleteTransaction}
                        {...props}
                    />
                )}
            </Stack.Screen>
            <Stack.Screen
                name="AddTransactionScreen"
                options={({ navigation }) => {
                    return {
                        title: 'Update Transaction',
                        headerLeft: () => (
                            <DrawerIcon navigation={navigation} />
                        ),
                    };
                }}
            >
                {props => (
                    <AddTransactionScreen
                        categories={categories}
                        updateTransaction={updateTransaction}
                        {...props}
                    />
                )}
            </Stack.Screen>
        </Stack.Navigator>
    );
};

export default TransactionStack;
