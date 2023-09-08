import React, { useState } from 'react'
import NewTaskPage from '../../components/NewTaskPage';
import SidebarPage from '../../components/SidebarPage';
import { MdDelete } from 'react-icons/md';

const Completed = () => {

    let [show, setShow] = useState(false);
    let [taskToUpdate, setTaskToUpdate] = useState([]);
    let [taskToUpdateIndex, setTaskToUpdateIndex] = useState('');


    let userTasks = JSON.parse(localStorage.getItem(localStorage.getItem('current_user') + "_task"));

    let handleDelete = (item, index) => {
        setShow(!show);
        setTaskToUpdate(item);
        setTaskToUpdateIndex(index);
        const updatedUserTasks = [...userTasks];
        console.log(taskToUpdateIndex)
        updatedUserTasks.splice(taskToUpdateIndex, 1);
        userTasks = updatedUserTasks;
        localStorage.setItem(localStorage.getItem('current_user') + '_task', JSON.stringify(userTasks));
        window.location.reload();
    }




    return (
        <div className='flex'>
            <div className='w-1/5'>
                <SidebarPage />
            </div>
            <div className='w-9/12'>
                <div className='flex flex-wrap'>
                    {userTasks.map((item, index) => {
                        if (item[4] === "completed") {
                            return (
                                <div className='w-[33.33%] ml-5 mt-5 p-5 rounded-sm bg-cyan-500 shadow-lg shadow-cyan-500/50' key={item[0]}>
                                    <h2 className='font-nunito font-bold text-xl mb-4'>{item[0]}</h2>
                                    <p className='font-nunito font-bold text-base mb-4'> {item[1]}</p>
                                    <div className='flex gap-x-36 mb-4'>
                                        <p className='font-nunito font-bold text-base'> {item[2]}</p>
                                        <p className='font-nunito font-bold text-base bg-[#5F35F5] p-2 rounded-md'> {item[3]}</p>
                                    </div>
                                    <MdDelete onClick={() => handleDelete(item, index)} className='cursor-pointer' />
                                </div>
                            );
                        }
                        return null;
                    })}
                </div>
            </div>
        </div>
    )
}

export default Completed