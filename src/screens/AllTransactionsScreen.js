import React, { useState, useEffect, useContext } from 'react';
import {FlatList,View,Alert,TouchableOpacity} from 'react-native';
import moment from 'moment';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Loading from '../components/Loading';
import { primaryColor } from '../utils/GlobalStyle';
import ExportToExcel from '../utils/ExportToExcel';
import TransactionModal from '../components/TransactionModal';
import DateTypeSelection from '../components/DateTypeSelection';
import { ApplicationContext } from '../services/application.context';
import styled from 'styled-components/native';
import Footer from '../features/home/components/Footer';
import TransactionCard from '../features/home/components/TransactionCard';
import { TransactionContext } from '../services/transaction.context';

const AllTransactionsScreen = ({route,navigation}) => {

    const{deleteTransaction , allTransactions} = useContext(ApplicationContext);

    const {showDialog,transactions,setTransactions,tempTransactions,setTempTransactions,isLoading,modalItem,date,hideModal,handleDateFilter,sortTransactions,handleDelete,handleUpdate} = useContext(TransactionContext);

    useEffect(() => {
        if (route.params === undefined) setTempTransactions(allTransactions);
        else setTransactions(route.params.transactions); 
    }, [route.params, allTransactions, transactions]);

    useEffect(() => {
        handleDateFilter('Month', new Date());
    }, [tempTransactions]);

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => showDialog()}>
                    <Icon name="file-export-outline" size={30} color={primaryColor}/>
                </TouchableOpacity>
            ),
        });
    }, [transactions]);

    return (
        <>
            {isLoading ? (
                <LoadingContainer>
                    <Loading />
                </LoadingContainer>
            ) : (
                <>
                    {modalItem !== null ? (
                        <TransactionModal
                            item={modalItem}
                            hideModal={hideModal}
                            handleUpdate={handleUpdate}
                            handleDelete={handleDelete}
                        />
                    ) : (
                        <View style={{ flex: 1 }}>
                            {route.params === undefined && (
                                <DataContainer>
                                    <DateTypeSelection date={date} sendDateToHome={handleDateFilter}/>
                                </DataContainer>
                            )}
                            <DataContainer>
                                <FlatList
                                    data={transactions}
                                    keyExtractor={item => item.id}
                                    renderItem={({item}) => <TransactionCard item={item} />}
                                />
                            </DataContainer>
                            <Footer sortTransactions={sortTransactions} />
                        </View>
                    )}
                </>
            )}
        </>
    );
};

export default AllTransactionsScreen;

const DataContainer = styled.View`
    flex: 12;
    margin-horizontal: 15px;
    margin-bottom: 10px;
`;


