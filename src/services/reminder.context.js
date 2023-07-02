import React, { Children, createContext, useContext, useEffect, useState } from 'react';
import { getData, removeData, storeData } from '../utils/LocalStorage';
import { ApplicationContext } from './application.context';

export const ReminderContext = createContext();

const ReminderContextProvider = ({ children }) => {

    const {reminders,deleteTransaction,updateTransaction} = useContext(ApplicationContext);

    const [reminderItem, setReminderItem] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);

    const handleReminder = () => {
        const sortedReminders = [...reminders].sort(
            (a, b) => a['transactionDate'] - b['transactionDate']
        );
        setData(sortedReminders);
        let presentDayReminders = reminders.filter(
            item =>
                new Date(item.transactionDate).toLocaleDateString() ===
                new Date().toLocaleDateString()
        );
        if (presentDayReminders.length > 0)
            setReminderItem(presentDayReminders[0]);
    };

    const handleReminderClick = async text => {
        //If reminder txn is paid => update txn remind to false, else delete the txn
        if (text === 'Pay') await handleUpdate();
        else if (text === 'Decline') await handleDelete(reminderItem);
        setReminderItem(null);
    };

    const handleDelete = async transaction => {
        setIsLoading(true);
        const isDeleted = await deleteTransaction(
            transaction.categoryId,
            transaction.id
        );
        if (!isDeleted) {
            Alert.alert(
                'Unsuccessful!',
                'Error deleting transaction. Please try again later',
                [
                    {
                        text: 'Ok',
                    },
                ],
                { cancelable: true }
            );
        }
        setIsLoading(false);
    };

    const handleUpdate = async () => {
        setIsLoading(true);
        let transaction = { ...reminderItem };
        transaction.remind = false;
        const isUpdated = await updateTransaction(
            transaction,
            transaction.categoryId,
            transaction.id
        );
        if (!isUpdated) {
            console.log('Error updating transaction');
        }
        setIsLoading(false);
    };

    useEffect(() => {
        handleReminder();
    }, [reminders]);

    return (
        <ReminderContext.Provider
            value={{
                isLoading,
                reminderItem,
                handleReminderClick,
                data,
                setReminderItem,
                handleDelete 
            }}
        >
            {children}
        </ReminderContext.Provider>
    );
};

export default ReminderContextProvider;
