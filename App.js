import React from 'react';
import Index from './src/Index';
import FontLoader from './src/utils/FontLoader';
import AuthenticationContextProvider from './src/services/authentication.context';
import ApplicationContextProvider from './src/services/application.context';
import TransactionContextProvider, { TransactionContext } from './src/services/transaction.context';
import AddTransactionContextProvider, { AddTransactionContext } from './src/services/addTransaction.context';

export default function App() {
    return (
        <FontLoader>
            <AuthenticationContextProvider>
                <ApplicationContextProvider>
                    <TransactionContextProvider>
                        <AddTransactionContextProvider>
                            <Index />
                        </AddTransactionContextProvider>
                    </TransactionContextProvider>
                </ApplicationContextProvider>
            </AuthenticationContextProvider>
        </FontLoader>
    );
}
