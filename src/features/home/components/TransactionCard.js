import React from 'react'
import { styled } from 'styled-components';
import moment from 'moment';

const TransactionCard = ({item}) => {

    const {
        transactionDate = "2023-06-23",
        categoryName ='',
        note='none',
        amount=0
    } = item;

    return (
        <Card>
            <CardDate>
                <CustomText>{moment(new Date(transactionDate)).format('DD')}</CustomText>
                <CustomText>{moment(new Date(transactionDate)).format('MMM')}</CustomText>
                <Divider/>
            </CardDate>
            <CustomText>
                <CustomText>{categoryName}</CustomText>
                <CustomText style={{ color: 'grey' }}>{note === '' ? 'N/A' : note}</CustomText>
            </CustomText>
            <CardAmount>
                <CustomText>{'\u20B9'}{amount}</CustomText>
            </CardAmount>
        </Card>
    )
}

export default TransactionCard

const Card = styled.TouchableOpacity`
    flex: 1;
    flex-direction: row;
    background-color: #fff;
    padding-vertical: 5px;
    padding-horizontal: 10px;
    margin-vertical: 5px;
    border-radius: 10px;
`;

const CustomText = styled.Text`
/* color: ${props => props.textColor}; */
    color: green;
    font-size: 16px;
    font-weight: bold;
`;

const CardDate = styled.View`
    flex: 1;
    flex-direction: column;
`;

const Divider = styled.View`
    border-right-width: 1px;
    margin-vertical: 3px;
    margin-horizontal: 5px;
    border-color: #D3D3D3;
`;

const CardAmount = styled.View`
    flex: 2;
    align-items: flex-end;
`;

