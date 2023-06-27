import React from 'react';
import Index from './src/Index';
import FontLoader from './src/utils/FontLoader';
import AuthenticationContextProvider from './src/services/authentication.context';
import ApplicationContextProvider from './src/services/application.context';
import TransactionContextProvider, { TransactionContext } from './src/services/transaction.context';

export default function App() {
    return (
        <FontLoader>
            <AuthenticationContextProvider>
                <ApplicationContextProvider>
                    <TransactionContextProvider>
                        <Index />
                    </TransactionContextProvider>
                </ApplicationContextProvider>
            </AuthenticationContextProvider>
        </FontLoader>
    );
}
