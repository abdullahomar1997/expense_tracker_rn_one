import React from 'react'
import { styled } from 'styled-components';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import { textColor } from '../../../utils/GlobalStyle';

const ReminderCard = ({item,setReminderItem,handleDelete}) => {

    const {
        transactionDate = "20-01-2020",
        categoryName = "category 7",
        amount = "1000",
        color = "green",
    } = item;

    return (
        <TouchableOpacity style={{ marginTop: 15, paddingHorizontal: 10 }} onPress={() => setReminderItem(item)}>
            <DateText>{moment(new Date(transactionDate)).format('MMMM DD, YYYY')}</DateText>
            <Card>
                <Container1>
                    <Color color={color}/>
                    <Text style={{ color: textColor, fontSize: 15 }}>{categoryName}</Text>
                </Container1>
                <Text1>{'\u20B9'} {amount}</Text1>
                <Container2 onPress={() => handleDelete(item)}>
                    <Icon name="delete" size={25} color="#D11A2A" />
                </Container2>
            </Card>
        </TouchableOpacity>
    );
}

export default ReminderCard;

const DateText = styled.Text`
  color: #696969;
  font-weight: bold;
  margin-bottom: 3px;
`;

const Card = styled.View`
  flex-direction: row;
  background-color: #fff;
  border-radius: 10px;
  padding-horizontal: 10px;
  padding-vertical: 5px;
  flex: 1;
`;

const Container1 = styled.View`
  flex: 3;
  flex-direction: row;
  align-items: center;
`;

const Color = styled.View`
  margin-right: 10px;
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
  background-color: ${prop => prop.color};
`;

const Text1 = styled.Text`
  color: ${props => props.textColor};
  align-self: center;
  flex: 1;
`;

const Container2 = styled.TouchableOpacity`
  flex: 1;
  align-items: flex-end;
  justify-content: center;
`;