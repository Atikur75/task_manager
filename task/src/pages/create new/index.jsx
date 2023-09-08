import React from 'react';
import SidebarPage from '../../components/SidebarPage';
import CreateTaskPage from '../../components/CreateTaskPage';

const CreateTask = () => {
  return (
    <div className='flex'>
      <div className='w-1/5'>
        <SidebarPage />
      </div>
      <div className='w-9/12'>
        <CreateTaskPage />
      </div>
    </div>
  )
}

export default CreateTask;