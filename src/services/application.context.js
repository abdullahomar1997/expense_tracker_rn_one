import React, { createContext, useEffect, useState } from 'react';

export const ApplicationContext = createContext();

const ApplicationContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [transactions, setTransactions] = useState([]);
    const [reminders, setReminders] = useState([]);

    useEffect(() => {
        fetchAllCategories();
    }, []);

    const fetchAllCategories = async () => {
        setLoading(true);
        // let allData = await getService('CATEGORIES_API', token);
        // if (allData === null) {
        //     setCategories(null);
        //     Alert.alert(
        //         'Session expired!',
        //         'Your session has expired. You will be signed out automatically, please login again.',
        //         [
        //             {
        //                 text: 'Ok',
        //                 onPress: handleToken(null),
        //             },
        //         ],
        //         { cancelable: true }
        //     );
        //     return;
        // }
        // allData = handleCategories(allData);

        // let tempTransactions = getAllTransactions(allData);
        
        let data = [
            {
              id: 1,
              title: "Category 1",
              color: "red",
              transactions: [
                {
                  amount: 10,
                  id:3,
                  // other properties of transaction 1...
                },
                {
                  amount: 20,
                  id:4,
                  // other properties of transaction 2...
                },
                // more transaction objects...
              ],
              totalExpense: 30,
            },
            {
              id: 2,
              title: "Category 2",
              color: "blue",
              transactions: [
                {
                  amount: 15,
                  id:1,
                  // other properties of transaction 3...
                },
                {
                  amount: 25,
                  id:2,
                  // other properties of transaction 4...
                },
                // more transaction objects...
              ],
              totalExpense: 40,
            },
            // more category objects...
          ]
          

        // let data = eliminateReminders(allData);
        // data = calculateTotalExpense(data);
        setCategories(data);
        // setTransactions(tempTransactions.filter(item => item.remind === false));
        // setReminders(tempTransactions.filter(item => item.remind === true));
        setLoading(false);
    };

    const addCategory = async category => {
        const data = await postService('CATEGORIES_API', token, category);
        if (data !== null) {
            fetchAllCategories();
            return true;
        }
        return false;
    };

    const updateCategory = async category => {
        const res = await putService(
            'CATEGORIES_API',
            token,
            category,
            category.id
        );
        if (res !== null) {
            fetchAllCategories();
            return true;
        }
        return false;
    };

    const deleteCategory = async id => {
        const res = await deleteService('CATEGORIES_API', token, id);
        if (res !== null) {
            setCategories(categories.filter(category => category.id !== id));
            return true;
        }
        return false;
    };

    const addTransaction = async (transaction, categoryId) => {
        const data = await postService(
            'TRANSACTIONS_API',
            token,
            transaction,
            categoryId
        );
        if (data !== null) {
            fetchAllCategories();
            return true;
        }
        return false;
    };

    const deleteTransaction = async (categoryId, transactionId) => {
        const res = await deleteService(
            'TRANSACTIONS_API',
            token,
            categoryId,
            transactionId
        );
        if (res !== null) {
            fetchAllCategories();
            return true;
        }
        return false;
    };

    const updateTransaction = async (
        transaction,
        categoryId,
        transactionId
    ) => {
        const res = await putService(
            'TRANSACTIONS_API',
            token,
            transaction,
            categoryId,
            transactionId
        );
        if (res !== null) {
            fetchAllCategories();
            return true;
        }
        return false;
    };

    return (
        <ApplicationContext.Provider
            value={{
                loading,
                updateTransaction,
                deleteTransaction,
                categories,
                addTransaction,
                deleteCategory,
                updateCategory,
                addCategory,
                reminders,
                fetchAllCategories
            }}
        >
            {children}
        </ApplicationContext.Provider>
    );
};

export default ApplicationContextProvider;
