import React, { useState } from 'react';
import { NEW, PROGRESS, COMPLETED } from '../constant/taskConstants'
import { useNavigate } from 'react-router-dom';

const CreateTaskPage = () => {

    const navigate = useNavigate();
    let [newTask, setNewTask] = useState('');
    let [description, setDescription] = useState('');
    let [date, setDate] = useState('');
    let [priority, setPriority] = useState('');

    let handleNew = (e) => {
        setNewTask(e.target.value)
    }

    let handleDescription = (e) => {
        setDescription(e.target.value)
    }

    let handleDate = (e) => {
        setDate(e.target.value)
    }

    let handlePriority = (e) => {
        setPriority(e.target.value)
    }

    let handleCreate = () => {
        let newTaskTracker = new Array(5);
        newTaskTracker[0] = newTask;
        newTaskTracker[1] = description;
        newTaskTracker[2] = date;
        newTaskTracker[3] = priority;
        newTaskTracker[4] = NEW;
        let currentUserName = localStorage.getItem('current_user');
        let userTaskName = currentUserName + '_task';
        let userTaskArray = JSON.parse(localStorage.getItem(userTaskName));
        userTaskArray.push(newTaskTracker);
        localStorage.setItem(userTaskName, JSON.stringify(userTaskArray));
        navigate('/newtask');

    }

    return (
        <div className='flex justify-center'>
            <div className='w-1/2  bg-blue-500 shadow-lg shadow-blue-500/50 mt-20 p-9'>
                <h2 className='font-nunito font-bold  text-2x '>Create New</h2>
                <input onChange={handleNew} type="text" className='w-full mt-5 border border-solid rounded-lg border-border-color-res py-2 ' placeholder='Create new..' />
                <textarea onChange={handleDescription} className='w-full mt-5 border border-solid rounded-lg border-border-color-res py-2 ' placeholder='Task description..' />
                <input onChange={handleDate} type='date' className='w-full mt-5 border border-solid rounded-lg border-border-color-res py-2 '/> <br />
                <input onChange={handlePriority} type='text' className='w-full mt-5 border border-solid rounded-lg border-border-color-res py-2 ' placeholder='Enter priority..' />
                <button onClick={handleCreate} className='w-1/4 bg-button rounded-lg font-nunito font-regular text-xs text-white py-3 mt-8'>Create</button>
            </div>
        </div>
    )
}

export default CreateTaskPage