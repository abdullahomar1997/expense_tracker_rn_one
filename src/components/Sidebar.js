import React, { useContext } from 'react';
import { SafeAreaView, Image } from 'react-native';
import { Drawer } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { styled } from 'styled-components';
import { AuthenticationContext } from '../services/authentication.context';

const Sidebar = ({ ...props }) => {

    const {handleToken} = useContext(AuthenticationContext);
    
    return (
        <SafeArea>
            <Logo source={require('../assets/images/logo.png')} />
            <DrawerContentScrollView {...props}>
                <DrawerSection>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="home-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Home"
                        onPress={() => props.navigation.navigate('HomeStack')}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="clipboard-list"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Categories"
                        onPress={() => props.navigation.navigate('Categories')}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="collapse-all-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Transactions"
                        onPress={() =>
                            props.navigation.navigate('AllTransactions')
                        }
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="bell-ring-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Reminders"
                        onPress={() =>
                            props.navigation.navigate('ReminderStack')
                        }
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="chart-areaspline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Charts"
                        onPress={() => props.navigation.navigate('Charts')}
                    />
                </DrawerSection>
            </DrawerContentScrollView>
            <BottomDrawerSection>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="exit-to-app" color={color} size={size} />
                    )}
                    label="Sign Out"
                    onPress={() => {
                        props.navigation.closeDrawer();
                        handleToken(null);
                    }}
                />
            </BottomDrawerSection>
        </SafeArea>
    );
};

export default Sidebar;

export const SafeArea = styled(SafeAreaView)`
    flex: 1;
`;

const Logo = styled(Image)`
    resize-mode: center;
    width: 100px;
    height: 100px;
    border-radius: 50px;
    align-self: center;
`;

const DrawerSection = styled(Drawer.Section)`
    margin-top: 15px;
`;

const BottomDrawerSection = styled(Drawer.Section)`
    margin-bottom: 15px;
    border-top-color: #f4f4f4;
    border-top-width: 1px;
`;
