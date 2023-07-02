import React, { useContext } from 'react';
import { Text, View, FlatList } from 'react-native';
import { Button } from 'react-native-paper';
import CategoryModal from '../components/CategoryModal';
import Loading, { LoadingContainer } from '../../../components/Loading';
import { windowWidth } from '../../../utils/Dimentions';
import { globalStyle, primaryColor } from '../../../utils/GlobalStyle';
import { textColor } from '../../../utils/GlobalStyle';
import styled from 'styled-components/native';
import { CategoryContext } from '../../../services/category.context';
import CategoriesCard from '../components/CategoriesCard';

const CategoryScreen = () => {

    const { data,isLoading,modalVisible,payload,isUpdate,handleSubmit,handleChange,setErrMsg,handleAdd,errMsg,handleDelete,handleUpdate,handleSearch,handleModalVisibility} = useContext(CategoryContext);

    return (
        <>
            {isLoading ? (
                <LoadingContainer>
                    <Loading />
                </LoadingContainer>
            ) : (
                <>
                    {modalVisible ? (
                        <CategoryModal payload={payload} isUpdate={isUpdate} handleSave={handleSubmit} handleChange={handleChange} handleModalVisibility={handleModalVisibility}/>
                    ) : (
                        <View>
                            <Header>
                                <Input textColor={textColor} windowWidth={windowWidth} placeholder="Search" placeholderTextColor="grey" onChangeText={text => handleSearch(text)}/>
                                <Button color={primaryColor} mode="contained" style={{ alignSelf: 'center' }} onPress={handleAdd}> Add </Button>
                            </Header>
                            {errMsg.trim().length !== 0 && (
                                <Text style={globalStyle.error} onPress={() => setErrMsg('')}>{errMsg}</Text>
                            )}
                            <FlatList
                                style={{ marginTop: 5 }}
                                data={data}
                                keyExtractor={item => item.id} 
                                renderItem={({ item, index }) => ( <CategoriesCard item={item} handleDelete={handleDelete} handleUpdate={handleUpdate}/>)}
                            />
                        </View>
                    )}
                </>
            )}
        </>
    );
};

export default CategoryScreen;

const Header = styled.View`
  flex-direction: row;
  margin-top: 10px;
  padding-horizontal: 10px;
  justify-content: space-between;
`;

const Input = styled.TextInput`
  color: ${props => props.textColor};
  border-bottom-width: 1px;
  width: ${props => props.windowWidth / 1.4}px;
  border-bottom-color: #D3D3D3;
  font-size: 17px;
`;
 