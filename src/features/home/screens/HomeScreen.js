import React, { useState, useEffect, useContext } from 'react';
import { RefreshControl, FlatList, TouchableOpacity, Text} from 'react-native';
import { Button } from 'react-native-paper';
import DateTypeSelection from '../../../components/DateTypeSelection';
import { getAllTransactions,netExpense,dateFilterHelper} from '../../../utils/HelperFunctions';
import Card from '../components/Card';
import { primaryColor } from '../../../utils/GlobalStyle';
import { ApplicationContext } from '../../../services/application.context';
import { styled } from 'styled-components';
import PieChartExample from '../../../components/PieChartExample';

const HomeScreen = ({ navigation }) => {

    const {fetchAllCategories:reload, categories:allCategories} = useContext(ApplicationContext);

    const [date, setDate] = useState(new Date());
    const [refreshing, setRefreshing] = useState(false);
    const [categories, setCategories] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        setDate(new Date());
        handleDateFilter('Month', new Date());
    }, [allCategories]);

    const handleRefresh = () => {
        setRefreshing(true);
        reload();
        setRefreshing(false);
    };

    const handleDateFilter = (type, value) => {
        if (allCategories === null) {
            setCategories(null);
            return;
        }
        let tempCategories = JSON.parse(JSON.stringify(allCategories));
        let filteredCategories = dateFilterHelper(type, value, tempCategories);
        let total = netExpense(filteredCategories);
        filteredCategories = filteredCategories.map((item, index) => {
            item.percentage = Math.round((item.totalExpense / total) * 100);
            return item;
        });
        setCategories(filteredCategories);
        setTotal(total);
    };

    return (
        <Container>
            <DateContainer>
                <DateTypeSelection date={date} sendDateToHome={handleDateFilter}/>
            </DateContainer>
                <ChartAndButton>
                    {/* <PieChart categories={categories} total={total} /> */}
                    <PieC>
                        <PieChartExample />
                    </PieC>
                    <Button icon="plus-thick" color={primaryColor} mode="contained" style={{ width: '90%', padding: 2 }} onPress={() => navigation.navigate('AddTransactionScreen', {
                            name: 'Add Transaction',
                            showFutureDates: false,
                        })
                    }>
                        <Text> Add Transaction</Text>
                    </Button>
                </ChartAndButton>
            <DataContainer>
                <FlatList
                    data={allCategories}
                    keyExtractor={item => item.id}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={handleRefresh}
                        />
                    }
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigation.navigate('AllTransactionsScreen', {
                            transactions: getAllTransactions([item]),
                        })}>
                            <Card item={item} />
                        </TouchableOpacity>
                    )}
                />
            </DataContainer>
        </Container>
    );
};

export default HomeScreen;

const Container = styled.View`
  flex: 1;
`;

const DateContainer = styled.View`
  flex: 2;
  background-color: #fff;
  margin-horizontal: 10px;
  margin-top: 15px;
  border-radius: 10px;
  padding-horizontal: 10px;
  justify-content: center;
`;

const ChartAndButton = styled.View`
  flex: 10;
  justify-content: space-evenly;
  align-items: center;
  background-color: #fff;
  /* background-color: green; */
  margin-horizontal: 10px;
  margin-top: 15px;
  border-radius: 10px;
`;
const PieC = styled.View`
     flex: 1;
     height:100%;
     width:100%;
     /* background-color:red; */
     align-items: center;
     justify-content: center;
`;

const DataContainer = styled.View`
  flex: 7;
  margin: 10px;

`;

