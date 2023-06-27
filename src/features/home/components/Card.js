import React from 'react';
import { textColor } from '../../../utils/GlobalStyle';
import styled from 'styled-components/native';

const Card = ({ item }) => {
    const {
       color = "blue",
       title = "Title",
       percentage = "20",
       totalExpense = 500,
    } = item;

    return (
        <CardContainer>
            <Content>
                <LeftContent>
                    <Color color={color} />
                    <CustomText textColor={textColor} >{title}</CustomText>
                </LeftContent>
                <RightContent>
                    <CustomText textColor={textColor} >{percentage} %</CustomText>
                    <CustomText textColor={textColor} >{totalExpense}</CustomText>
                </RightContent>
            </Content>
        </CardContainer>
    );
};

export default Card;

const CardContainer = styled.View`
  margin-vertical: 5px;
  border-radius: 8px;
  background-color: #fff;
  shadow-offset: 1px 1px;
  shadow-opacity: 0.5;
  shadow-radius: 2px;
  shadow-color: black;
`;

const Content = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding-vertical: 12px;
  padding-horizontal: 15px;
`;

const LeftContent = styled.View`
  flex: 4;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const RightContent = styled.View`
  flex: 2;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Color = styled.View`
  margin-right: 10px;
  width: 18px;
  height: 18px;
  border-radius: 9px;
  background-color:  ${props => props.color};
`;

const CustomText = styled.Text`
  color: ${props => props.textColor};
`;
