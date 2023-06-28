import React, { createContext, useEffect, useState } from 'react'
import moment from 'moment';

export const AddTransactionContext = createContext();

const AddTransactionContextProvider = ({children}) => {

    let initialState = {
        amount: 0,
        note: '',
        transactionDate: new Date().getTime(),
        remind: false,
    };

    const today = new Date();
    const yesterday = new Date(today.setDate(today.getDate() - 1));
    const tomorrow = new Date(today.setDate(today.getDate() + 2));

    const [payload, setPayload] = useState(initialState);
    const [categoryId, setCategoryId] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showFutureDates,setShowFutureDates] = useState(undefined);
    const [oldTransaction,setOldTransaction] = useState(undefined);

    const prepopulateDataForUpdate = () => {
        setCategoryId(oldTransaction.categoryId);
        setSelectedDate(new Date(oldTransaction.transactionDate));
        setPayload({
            ...payload,
            amount: oldTransaction.amount,
            note: oldTransaction.note,
            transactionDate: oldTransaction.transactionDate,
        });
    };

    const dateToString = date => {
        return moment(date).format('DD/MM');
    };

    const handleChange = (key, value) => {
        setPayload({ ...payload, [key]: value });
    };

    

    const handleSubmit = async () => {
        setIsLoading(true);

        //Validation
        if (validate() === false) {
            setIsLoading(false);
            return;
        }

        //To add a reminder txn
        let payloadToSend = { ...payload };
        if (showFutureDates) payloadToSend.remind = true;

        let isSuccessful;
        if (oldTransaction !== undefined)
            isSuccessful = await updateTransaction(
                payloadToSend,
                categoryId,
                oldTransaction.id
            );
        else isSuccessful = await addTransaction(payloadToSend, categoryId);

        if (isSuccessful) {
            setCategoryId(null);
            setPayload(initialState);
            setErrMsg('');
            setIsLoading(false);
            navigation.goBack();
        } else {
            setErrMsg(
                'Error adding/updating transaction. Please try again later.'
            );
            setIsLoading(false);
        }
    };

    const validate = () => {
        if (payload.amount <= 0) {
            setErrMsg('Amount must be greater than 0');
            return false;
        }
        if (isNaN(payload.amount)) {
            setErrMsg('Amount must be a number');
            return false;
        }
        if (categoryId === null) {
            setErrMsg('Please select the category');
            return false;
        }
        return true;
    };

    const handleSelectDate = inDate => {
        setShowDatePicker(false);
        setSelectedDate(inDate);
        setPayload({ ...payload, transactionDate: inDate.getTime() });
    };

    const isSelectedDateVisible = () => {
        if (showFutureDates)
            return (
                selectedDate.toLocaleDateString() !== yesterday.toLocaleDateString() &&
                selectedDate.toLocaleDateString() !== tomorrow.toLocaleDateString()
            );
        return (
            selectedDate.toLocaleDateString() !== today.toLocaleDateString() &&
            selectedDate.toLocaleDateString() !== yesterday.toLocaleDateString() &&
            selectedDate.toLocaleDateString() !== tomorrow.toLocaleDateString()
        );
    };

    useEffect(() => {
        if (oldTransaction !== undefined) prepopulateDataForUpdate();
    }, []);

    return (
        <AddTransactionContext.Provider
            value={{
                showFutureDates,
                errMsg,
                handleSubmit,
                showDatePicker,
                setShowDatePicker,
                setShowFutureDates,
                isSelectedDateVisible,
                setOldTransaction,
                isLoading,
                handleSelectDate,
                dateToString,
                payload,
                handleChange,
                categoryId,
                setCategoryId,
                today,
                yesterday,
                selectedDate,
                tomorrow
            }}
        >
            {children}
        </AddTransactionContext.Provider>
    )
}

export default AddTransactionContextProvider;