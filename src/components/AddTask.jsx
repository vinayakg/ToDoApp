// Task input component with "Add Task" feature
import React, { useState } from 'react';
import { TextInput, Button, StyleSheet } from 'react-native';
import { addTask } from '../database';

const AddTask = ({ refreshTasks }) => {
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        if (task.trim()) {
            addTask(task, () => {
                setTask('');
                refreshTasks();
            });
        }
    };

    return (
        <>
            <TextInput
                style={styles.input}
                placeholder="Add a Task"
                value={task}
                onChangeText={setTask}
                onSubmitEditing={handleAddTask}
            />
        </>
    );
};

const styles = StyleSheet.create({
    input: { height: 40, borderColor: 'gray', borderWidth: 1, padding: 10, marginBottom: 10 },
});

export default AddTask;