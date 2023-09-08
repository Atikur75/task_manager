import React from 'react';
import SidebarPage from '../../components/SidebarPage';
import NewTaskPage from '../../components/NewTaskPage';

const NewTask = () => {
    return (
        <div className='flex'>
            <div className='w-1/5'>
                <SidebarPage />
            </div>
            <div className='w-9/12'>
                <NewTaskPage />
            </div>
        </div>
    )
}

export default NewTask;