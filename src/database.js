// Database setup and helper functions without transactions
import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({ name: 'tasks.db', location: 'default' });

export const initializeDatabase = () => {
    db.executeSql(
        'CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, task TEXT, completed INTEGER);'
    );
};

export const getTasks = callback => {
    db.executeSql('SELECT * FROM tasks;', [], (results) => {
        let tasks = [];
        for (let i = 0; i < results.rows.length; i++) {
            tasks.push(results.rows.item(i));
        }
        callback(tasks);
    });
};

export const addTask = (taskText, callback) => {
    db.executeSql('INSERT INTO tasks (task, completed) VALUES (?, 0);', [taskText], callback);
};

export const toggleTask = (taskId, completed, callback) => {
    db.executeSql('UPDATE tasks SET completed = ? WHERE id = ?;', [completed, taskId], callback);
};