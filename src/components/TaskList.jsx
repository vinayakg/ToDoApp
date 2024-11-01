// Task list component displaying tasks with checkboxes
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { toggleTask } from '../database';

const TaskList = ({ tasks, refreshTasks }) => {
    const handleToggle = (taskId, completed) => {
        toggleTask(taskId, completed ? 0 : 1, refreshTasks);
    };

    return (
        <View>
            {tasks.map(task => (
                <TouchableOpacity key={task.id} onPress={() => handleToggle(task.id, task.completed)}>
                    <Text style={task.completed ? styles.completed : styles.task}>{task.task}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    task: { fontSize: 18 },
    completed: { fontSize: 18, textDecorationLine: 'line-through', color: 'grey' },
});

export default TaskList;