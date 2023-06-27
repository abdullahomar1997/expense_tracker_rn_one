import React from 'react'
import { styled } from 'styled-components';

const Footer = ({sortTransactions}) => {
  return (
    <FooterContainer>
        <SortButtons onPress={() =>sortTransactions('transactionDate')}>
            <FooterText>Sort by Date</FooterText>
        </SortButtons>
        <SortButtons onPress={() => sortTransactions('amount')}>
            <FooterText>Sort by Amount</FooterText>
        </SortButtons>
    </FooterContainer>
  )
}

export default Footer;

const FooterContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top-width: 1px;
  border-top-color: #D3D3D3;
  background-color: #fff;
`;

const SortButtons = styled.TouchableOpacity`
  padding-vertical: 10px;
  width: 50%;
`;

const FooterText = styled.Text`
  /* color: ${props => props.textColor}; */
  color: orange;
  text-align: center;
`;