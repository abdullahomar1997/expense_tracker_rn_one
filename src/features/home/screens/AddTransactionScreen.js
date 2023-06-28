import React, { useContext } from 'react';
import { FlatList, View } from 'react-native';
import DatePicker from '../../../components/DatePicker';
import Loading from '../../../components/Loading';
import {globalStyle,primaryColor,secondaryColor,textColor} from '../../../utils/GlobalStyle';
import { ApplicationContext } from '../../../services/application.context';
import styled from 'styled-components';
import CategoriesCard from '../components/CategoriesCard';
import ListHeader from '../components/ListHeader';
import { AddTransactionContext } from '../../../services/addTransaction.context';
import ListFooter from '../components/ListFooter';

const AddTransactionScreen = ({navigation,route}) => {

    const {categories,addTransaction,updateTransaction} = useContext(ApplicationContext);

    const {selectedDate,tomorrow,today,yesterday,showFutureDates,errMsg,handleSubmit,showDatePicker,setShowDatePicker,setShowFutureDates,isSelectedDateVisible,setOldTransaction,isLoading,handleSelectDate,dateToString,payload,handleChange,categoryId, setCategoryId} = useContext(AddTransactionContext);

    // setShowFutureDates(route.params.showFutureDates);
    // setOldTransaction(route.params.transaction);

    return (
        <>
            {isLoading ? (
                <LoadingContainer>
                    <Loading />
                </LoadingContainer>
            ) : (
                <View style={{ padding: 10 }}>
                    <FlatList
                        ListHeaderComponent ={<ListHeader payload={payload} handleChange={handleChange} textColor={textColor} />}
                        numColumns={4}
                        data={categories}
                        keyExtractor={item => item.id}
                        columnWrapperStyle={{flex: 1,justifyContent: 'space-evenly'}}
                        renderItem={({ item, index }) => ( <CategoriesCard item={item} categoryId={categoryId} setCategoryId={setCategoryId}/>)}
                        ListFooterComponent={
                            <ListFooter
                              showFutureDates={showFutureDates}
                              navigation={navigation}
                              textColor={textColor}
                              handleSelectDate={handleSelectDate}
                              tomorrow={tomorrow}
                              today={today}
                              yesterday={yesterday}
                              selectedDate={selectedDate}
                              isSelectedDateVisible={isSelectedDateVisible}
                              secondaryColor={secondaryColor}
                              primaryColor={primaryColor}
                              setShowDatePicker={setShowDatePicker}
                              DatePicker={DatePicker}
                              payload={payload}
                              handleChange={handleChange}
                              errMsg={errMsg}
                              globalStyle={globalStyle}
                              AddButton={AddButton}
                              Note={Note}
                              Heading={Heading}
                              DateContainer={DateContainer}
                              DateBoxes={DateBoxes}
                              DateBox={DateBox}
                              TextContainer={TextContainer}
                              DateText={DateText}
                              AddCategoryBox={AddCategoryBox}
                              CategoryText={CategoryText}
                              CalendarIcon={CalendarIcon}
                              dateToString={dateToString}
                              handleSubmit={handleSubmit}
                              showDatePicker={showDatePicker}
                            />
                          }
                    />
                </View>
            )}
        </>
    );
};

export default AddTransactionScreen;

const Heading = styled.Text`
  /* color: ${props => props.textColor}; */
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: 500;
`;

const AddCategoryBox = styled.View`
  border-radius: 10px;
  margin-vertical: 5px;
  justify-content: center;
  padding: 2px;
  background-color: grey;
`;

const CategoryText = styled.Text`
  /* color: ${props => props.textColor}; */
  text-align: center;
  padding-vertical: 5px;
`;

const DateContainer = styled.View`
  margin-top: 5px;
  flex-direction: row;
  justify-content: space-between;
`;

const DateBoxes = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
`;

const DateBox = styled.View`
  width: 70px;
  border-radius: 5px;
  align-items: center;
  background-color: #fff;
`;

const TextContainer = styled.View`
  align-items: center;
  padding-vertical: 8px;
  padding-horizontal: 5px;
`;

const DateText = styled.Text`
  color: ${props => props.textColor};
`;

const CalendarIcon = styled.View`
  padding-vertical: 12px;
  margin-right: 3px;
`;

const Note = styled.TextInput`
  border-width: 1px;
  border-radius: 5px;
  border-color: grey;
  background-color: #fff;
  color: ${props => props.textColor};
  padding-left: 10px;
`;

const AddButton = styled.TouchableOpacity`
  padding: 5px;
  margin-top: 10px;
  /* borderRadius: 10px; */
  /* alignSelf: center; */
`;

const StyledView = styled.View`
  margin-vertical: 10px;
  flex-direction: row;
  justify-content: center;
`;