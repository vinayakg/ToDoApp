// Main app component initializing and displaying TaskList and AddTask
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { initializeDatabase, getTasks } from './database';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

const App = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        initializeDatabase();
        loadTasks();
    }, []);

    const loadTasks = () => {
        getTasks(setTasks);
    };

    return (
        <SafeAreaView style={styles.container}>
            <TaskList tasks={tasks} refreshTasks={loadTasks} />
            <AddTask refreshTasks={loadTasks} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, justifyContent: 'center' },
});

export default App;