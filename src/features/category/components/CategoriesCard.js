import React from 'react'
import { styled } from 'styled-components';

const CategoriesCard = ({item}) => {
    return (
        <Card>
            <Container2>
                <Color color={item.color} />
                <Text style={{ color: textColor, fontSize: 15 }}>{item.title}</Text>
            </Container2>
            <IconsContainer>
                <Icon size={25} color="#0096FF" name="square-edit-outline" onPress={() => handleUpdate(item)}/>
                <Icon size={25} color="#D11A2A" name="delete"onPress={() => handleDelete(item.id)}/>
            </IconsContainer>
        </Card>
    );
}

export default CategoriesCard;

const Card = styled.View`
  flex: 1;
  flex-direction: row;
  background-color: #fff;
  border-radius: 10px;
  margin-top: 10px;
  margin-horizontal: 10px;
`;

const Container2 = styled.View`
  flex: 3;
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;

const Color = styled.View`
  margin-right: 10px;
  width: 15px;
  height: 15px;
  border-radius: 7.5px;
  background-color: ${props => props.textColor}
`;

const IconsContainer = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;