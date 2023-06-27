import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

const NavigationDrawerToggle  = ({ navigation }) => {
  return (
    <Container>
      <MenuButton onPress={() => navigation.toggleDrawer()}>
        <MenuIcon name="menu" />
      </MenuButton>
    </Container>
  );
};

export default NavigationDrawerToggle ;

const Container = styled.View`
  flex-direction: row;
`;

const MenuButton = styled.TouchableOpacity`
  margin-right: 30px;
`;

const MenuIcon = styled(Icon)`
  color: black;
  font-size: 30px;
`;

