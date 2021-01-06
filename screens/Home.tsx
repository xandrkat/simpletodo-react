import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Feather } from '@expo/vector-icons';

import { todoActions } from "../framework/redux/actions/todoActions";
import { baseStyles, homeStyles } from '../styles/';

function createNewTask(content: string) {
    const taskId = Date.now();

    return {
        [taskId]: {
            id: taskId,
            description: content,
            isDone: false
        }
    };
}

function TaskItem(props) {
    const task = props.taskInfo;
    const dispatch = useDispatch();

    const taskIcon = task.isDone ?
        <Feather name="check-square" size={30} color="green" /> :
        <Feather name="square" size={30} color="green" />;

    useEffect(() => { }, []);

    return (
        <View style={baseStyles.inSameLine}>
            {taskIcon}
            <Text
                style={homeStyles.taskItem}
                onPress={() => dispatch(todoActions.toggleCheck(parseInt(task.id)))}>
                {task.description}
            </Text>
        </View>
    );
};

export function HomeScreen(props) {
    const [userInput, setUserInput] = useState(''); // Local state

    // mapStateToProps - Using global state
    const { tasks } = useSelector((state) => ({
        tasks: state.tasks
    }));

    const dispatch = useDispatch();

    useEffect(() => { }, []);

    return (
        <View style={baseStyles.container}>
            <TextInput
                style={homeStyles.inputText}
                keyboardType="default"
                returnKeyType="done"
                onChangeText={(userInput) => setUserInput(userInput)}
                onSubmitEditing={() => {
                    if (userInput) {
                        dispatch(todoActions.addTask(createNewTask(userInput)));
                        setUserInput('');
                    }
                }}
                value={userInput}
                placeholder="Enter your task"
            />

            <FlatList
                data={Object.keys(tasks)}
                renderItem={({ item }) => <TaskItem taskInfo={tasks[item]} />}
                keyExtractor={(item, index) => index.toString()}
            />

            < Button title="Go to About screen >" onPress={() => props.navigation.navigate('About')} />

        </View >
    );
}
