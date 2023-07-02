import React from 'react';
import Index from './src/Index';
import FontLoader from './src/utils/FontLoader';
import AuthenticationContextProvider from './src/services/authentication.context';
import ApplicationContextProvider from './src/services/application.context';
import TransactionContextProvider from './src/services/transaction.context';
import AddTransactionContextProvider from './src/services/addTransaction.context';
import CategoryContextProvider from './src/services/category.context';
import ReminderContextProvider from './src/services/reminder.context';

export default function App() {
    return (
        <FontLoader>
            <AuthenticationContextProvider>
                <ApplicationContextProvider>
                    <CategoryContextProvider>
                        <ReminderContextProvider>
                            <TransactionContextProvider>
                                <AddTransactionContextProvider>
                                    <Index />
                                </AddTransactionContextProvider>
                            </TransactionContextProvider>
                        </ReminderContextProvider>
                    </CategoryContextProvider>
                </ApplicationContextProvider>
            </AuthenticationContextProvider>
        </FontLoader>
    );
}
