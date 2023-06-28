import React from 'react';
import { View, Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ListFooter = ({
  showFutureDates,
  navigation,
  textColor,
  handleSelectDate,
  tomorrow,
  today,
  yesterday,
  selectedDate,
  isSelectedDateVisible,
  secondaryColor,
  primaryColor,
  setShowDatePicker,
  DatePicker,
  payload,
  handleChange,
  errMsg,
  globalStyle,
  AddButton,
  Note,
  Heading,
  DateContainer,
  DateBoxes,
  DateBox,
  TextContainer,
  DateText,
  AddCategoryBox,
  CategoryText,
  CalendarIcon,
  dateToString,
  handleSubmit,
  showDatePicker
}) => {
  return (
    <>
      {!showFutureDates && (
        <AddCategoryBox onPress={() => navigation.navigate('CategoryScreen')}>
          <CategoryText textColor={textColor}>+ Create</CategoryText>
        </AddCategoryBox>
      )}
      <View style={{ marginVertical: 10 }}>
        <Heading textColor={textColor}>Date</Heading>
        <DateContainer>
          <DateBoxes>
            {showFutureDates ? (
              <DateBox onPress={() => handleSelectDate(tomorrow)}>
                <TextContainer>
                  <DateText textColor={textColor}>{dateToString(tomorrow)}</DateText>
                  <DateText textColor={textColor}>TMR</DateText>
                </TextContainer>
              </DateBox>
            ) : (
              <>
                <DateBox onPress={() => handleSelectDate(today)}>
                  <TextContainer>
                    <DateText textColor={textColor}>{dateToString(today)}</DateText>
                    <DateText textColor={textColor}>Today</DateText>
                  </TextContainer>
                </DateBox>
                <DateBox onPress={() => handleSelectDate(yesterday)}>
                  <TextContainer>
                    <DateText textColor={textColor}>{dateToString(yesterday)}</DateText>
                    <DateText textColor={textColor}>Yes'day</DateText>
                  </TextContainer>
                </DateBox>
              </>
            )}
            {isSelectedDateVisible() && (
              <DateBox backgroundColor={secondaryColor}>
                <TextContainer>
                  <DateText textColor={textColor}>{dateToString(selectedDate)}</DateText>
                  <DateText textColor={textColor}>Selected</DateText>
                </TextContainer>
              </DateBox>
            )}
          </DateBoxes>
          <CalendarIcon onPress={() => setShowDatePicker(true)}>
            <FontAwesome name="calendar" size={25} color={primaryColor} />
          </CalendarIcon>
        </DateContainer>
        {showDatePicker && (
          <DatePicker handleSelectDate={handleSelectDate} showFutureDates={showFutureDates} />
        )}
      </View>
      <View style={{ marginVertical: 10 }}>
        <Heading>Note</Heading>
        <Note
          value={payload.note}
          placeholder="Comment"
          placeholderTextColor={textColor}
          onChangeText={(text) => handleChange('note', text)}
          textColor={textColor}
        />
      </View>

      {errMsg.trim().length !== 0 && (
        <Text style={globalStyle.error}>{errMsg}</Text>
      )}

      <AddButton mode="contained" color={primaryColor} onPress={handleSubmit}>
        <Text>Save</Text>
      </AddButton>
    </>
  );
};

export default ListFooter;
