import React, { Children, createContext, useEffect, useState } from 'react';
import { getData, removeData, storeData } from '../utils/LocalStorage';

export const CategoryContext = createContext();

const CategoryContextProvider = ({ children }) => {

    const { categories, deleteCategory, updateCategory, addCategory} = useContext(ApplicationContext);

    let initialState = {
        title: '',
        description: '',
    };

    const [errMsg, setErrMsg] = useState('');
    const [data, setData] = useState(categories);
    const [isUpdate, setIsUpdate] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [payload, setPayload] = useState(initialState);
    const [modalVisible, setModalVisible] = useState(false);

    const handleSearch = text => {
        setData(
            categories.filter(
                item =>
                    item.title.toLowerCase().indexOf(text.toLowerCase()) !== -1
            )
        );
    };

    const handleChange = (key, value) => {
        setPayload({ ...payload, [key]: value });
    };

    const handleModalVisibility = flag => {
        setPayload(initialState);
        setModalVisible(flag);
    };

    
    const handleSubmit = async () => {
        setModalVisible(false);
        setIsLoading(true);

        if (payload.title.trim() === '') {
            setErrMsg('Fill the title.');
            setIsLoading(false);
            return;
        }

        let isSuccessful;
        if (isUpdate) {
            isSuccessful = await updateCategory(payload);
            setIsUpdate(false);
        } else {
            isSuccessful = await addCategory(payload);
        }

        if (isSuccessful === true) {
            setPayload(initialState);
        } else {
            setErrMsg('Problem occured. Please try again later.');
        }
        setIsLoading(false);
    };

    
    const handleDelete = async id => {
        setIsLoading(true);
        const isDeleted = await deleteCategory(id);
        if (isDeleted === false) {
            Alert.alert(
                'Error!',
                'Problem deleting category. Please try again later.',
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

    const handleUpdate = item => {
        setIsUpdate(true);
        setPayload(item);
        setModalVisible(true);
    };

    const handleAdd = () => {
        setIsUpdate(false);
        setPayload(initialState);
        setModalVisible(true);
    };

    useEffect(() => {
        setData(categories);
        return () => {
            setData([]);
        };
    }, [categories]);

    return (
        <CategoryContext.Provider
            value={{
                token,
                onRegister,
                onLogin,
                isLoading,
                handleToken,
                errMsg,
            }}
        >
            {children}
        </CategoryContext.Provider>
    );
};

export default CategoryContextProvider;
