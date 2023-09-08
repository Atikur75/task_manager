import React, { useState } from 'react'
import { json } from 'react-router-dom';
import { BiSolidEditAlt } from 'react-icons/bi';

const NewTaskPage = () => {

    let [show, setShow] = useState(false);
    let [taskToUpdate, setTaskToUpdate] = useState([]);
    let [taskToUpdateIndex, setTaskToUpdateIndex] = useState('');


    let userTasks = JSON.parse(localStorage.getItem(localStorage.getItem('current_user') + "_task"));

    let handleEdit = (item, index) => {
        setShow(!show);
        setTaskToUpdate(item);
        setTaskToUpdateIndex(index);
        console.log(item)
    }

    let handleSelect = (e) => {
        console.log(userTasks[taskToUpdateIndex][4]);
        userTasks[taskToUpdateIndex][4] = e.target.value;
        localStorage.setItem(localStorage.getItem('current_user') + '_task', JSON.stringify(userTasks));
        console.log('new task page')
        window.location.reload();
    }

    return (
        <>
            <div className='flex flex-wrap'>
                {userTasks.map((item, index) => {
                    if (item[4] === "new") {
                        return (
                            <div className='w-[33.33%] ml-5 mt-5 p-5 rounded-sm bg-cyan-500 shadow-lg shadow-cyan-500/50' key={item[0]}>
                                <h2 className='font-nunito font-bold text-xl mb-4'>{item[0]}</h2>
                                <p className='font-nunito font-bold text-base mb-4'> {item[1]}</p>
                                <div className='flex gap-x-36 mb-4'>
                                    <p className='font-nunito font-bold text-base'> {item[2]}</p>
                                    <p className='font-nunito font-bold text-base bg-[#5F35F5] p-2 rounded-md'> {item[3]}</p>
                                </div>
                                <BiSolidEditAlt onClick={() => handleEdit(item, index)} className='cursor-pointer' />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            {show && (
                <div className='w-[33.33%] ml-5 mt-[-10px] p-5 rounded-sm bg-blue-500 shadow-lg shadow-blue-500/50'>
                    <h2 className='font-nunito font-bold text-xl mb-4 text-center'>Change Status</h2>
                    <select onChange={handleSelect} className='w-full p-1 rounded-md'>
                        <option value="new">new</option>
                        <option value="progress">progress</option>
                        <option value="completed">completed</option>
                    </select>
                </div>
            )}
        </>



    )
}

export default NewTaskPage