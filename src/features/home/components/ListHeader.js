import React from 'react';
import styled from 'styled-components';

const StyledView = styled.View`
  margin-vertical: 10px;
  flex-direction: row;
  justify-content: center;
`;

const AmountField = styled.TextInput`
  background-color: #fff;
  width: 100px;
  border-bottom-width: 2px;
  font-size: 20px;
  text-align: center;
  /* color: ${props => props.textColor}; */
`;

const CategoryBox = styled.View`
  border-width: 1px;
  border-radius: 10px;
  margin-vertical: 5px;
  width: 85px;
  background-color: #fff;
`;

const Heading = styled.Text`
  color: ${props => props.textColor};
  font-size: 18px;
  margin-bottom: 5px;
  font-weight: 500;
`;

const ListHeader = ({ payload, handleChange, textColor }) => {
  return (
    <>
      <StyledView>
        <AmountField
          value={payload.amount.toString()}
          autoFocus={true}
          placeholder="INR"
          placeholderTextColor={textColor}
          keyboardType="numeric"
          onChangeText={text => handleChange('amount', text)}
        />
      </StyledView>
      <Heading textColor={textColor} >Categories</Heading>
    </>
  );
};

export default ListHeader;
