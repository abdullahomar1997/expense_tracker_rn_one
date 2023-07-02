import React, { useContext } from 'react';
import {FlatList} from 'react-native';
import Loading from '../../../components/Loading';
import ReminderModal from '../components/ReminderModal';
import ReminderCard from '../components/ReminderCard';
import { ReminderContext } from '../../../services/reminder.context';

const ReminderScreen = () => {

    const {isLoading,reminderItem,handleReminderClick,data,setReminderItem,handleDelete} = useContext(ReminderContext);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    {reminderItem !== null ? (
                        <ReminderModal item={reminderItem} handleReminderClick={handleReminderClick}/>
                    ) : (
                        <FlatList
                            data={data}
                            keyExtractor={item => item.id}
                            renderItem={({ item, index }) => ( <ReminderCard item={item} setReminderItem={setReminderItem} handleDelete={handleDelete} />)}
                        />
                    )}
                </>
            )}
        </>
    );
};

export default ReminderScreen;
