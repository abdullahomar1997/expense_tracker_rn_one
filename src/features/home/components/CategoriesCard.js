import React from 'react';
import styled from 'styled-components/native';

const CategoryBox = styled.TouchableOpacity`
  /* Add your category box styles here */
`;

const CategoryText = styled.Text`
  /* Add your category text styles here */
`;

const CategoriesCard = ({ item, categoryId, setCategoryId }) => {
  return (
    <CategoryBox
      onPress={() => setCategoryId(item.id)}
      style={{
        borderColor: item.color,
        backgroundColor: categoryId === item.id ? item.color : 'transparent',
      }}
    >
      <CategoryText>
        {item.title.length > 10 ? item.title.slice(0, 8) + '...' : item.title}
      </CategoryText>
    </CategoryBox>
  );
};

export default CategoriesCard;
