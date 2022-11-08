import { tasks as data } from "../data/tasks";
import {createContext, useState, useEffect} from 'react'

export const TaskContext = createContext();


export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([]);

    function createTask(task) {
    setTasks([...tasks, {
        title: task.title,
        id: tasks.length,
        description: task.description
    }])}

    function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    useEffect(() => {
        setTasks(data);
    }, []);

    return (
        <TaskContext.Provider value={{
            tasks,
            deleteTask,
            createTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}