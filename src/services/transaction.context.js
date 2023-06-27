import React, { createContext, useState } from 'react'

export const TransactionContext = createContext();

const TransactionContextProvider = ({children}) => {
    
    const [transactions, setTransactions] = useState([]);
    const [tempTransactions, setTempTransactions] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [dateAndType, setdateAndType] = useState([]);
    const [modalItem, setModalItem] = useState(null);
    const [date, setDate] = useState(new Date());

    const hideModal = () => {
        setModalItem(null);
    };

    const handleDateFilter = (type, value) => {
        setdateAndType([type, value]);
        switch (type) {
            case 'Day':
                setTransactions(tempTransactions.filter(item => new Date(item.transactionDate).toLocaleDateString() === value.toLocaleDateString()));
                break;
            case 'Month':
                setTransactions(
                    tempTransactions.filter(item => {
                        let date = new Date(item.transactionDate);
                        return ( date.getMonth() === value.getMonth() && date.getFullYear() === value.getFullYear());
                    })
                );
                break;
            case 'Year':
                setTransactions(tempTransactions.filter(item => new Date(item.transactionDate).getFullYear() === value));
                break;
        }
    };

    const sortTransactions = property => {
        const sortedData = [...transactions].sort(
            (a, b) => b[property] - a[property]
        );
        setTransactions(sortedData);
    };

    const handleExport = async () => {
        setIsLoading(true);

        //Covert transactionDate, rename key names and remove unnecessary fields
        let data = JSON.parse(JSON.stringify(transactions));
        for (let item of data) {
            item.date = moment(new Date(item.transactionDate)).format(
                'DD-MMM-YYYY'
            );
            if (item.note.trim() === '') item.note = 'null';
            item.category = item.categoryName;
            delete item.transactionDate;
            delete item.id;
            delete item.color;
            delete item.remind;
            delete item.categoryId;
            delete item.categoryName;
        }

        await ExportToExcel(dateAndType[0], dateAndType[1], data);
        setIsLoading(false);
    };

    const handleDelete = async transaction => {
        setIsLoading(true);
        const isDeleted = await deleteTransaction(transaction.categoryId,transaction.id);
        if (isDeleted) {
            setTransactions(transactions.filter(item => item.id !== transaction.id));
        } else {
            Alert.alert(
                'Error!',
                'Problem deleting transaction. Please try again later.',
                [
                    {
                        text: 'Ok',
                    },
                ],
                { cancelable: true }
            );
        }
        setModalItem(null);
        setIsLoading(false);
    };

    const handleUpdate = transaction => {
        setModalItem(null);
        navigation.navigate('AddTransactionScreen', {
            name: 'Add Transaction',
            transaction: transaction,
            showFutureDates: false,
        });
    };

    const showDialog = () => {
        if (transactions.length < 1) {
            Alert.alert('Error!', 'No data found', [{ text: 'Cancel' }]);
            return;
        }
        let dateValue = dateAndType[1];
        if (dateAndType[0] === 'Day') dateValue = dateValue.toLocaleDateString();
        else if (dateAndType[0] === 'Year') dateValue = 'year ' + dateValue;
        else dateValue = moment(dateValue).format('MMMM, YYYY');
        Alert.alert('Confirmation!', 'Export data of ' + dateValue, [
            { text: 'Cancel' },
            { text: 'OK', onPress: () => handleExport() },
        ]);
    };

    return (
        <TransactionContext.Provider
            value={{
                showDialog,
                transactions,
                setTransactions,
                tempTransactions,
                setTempTransactions,
                isLoading,
                setIsLoading,
                dateAndType,
                setdateAndType,
                modalItem,
                setModalItem,
                date,
                setDate,
                hideModal,
                handleDateFilter,
                sortTransactions,
                handleExport,
                handleDelete,
                handleUpdate,
            }}
        >
            {children}
        </TransactionContext.Provider>
    )
}

export default TransactionContextProvider;