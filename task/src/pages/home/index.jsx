import React from 'react';
import SidebarPage from '../../components/SidebarPage';
import Navbar from '../../components/Navbar';

const Home = () => {
    return (
        <>


            <div className='flex'>
                <div className='w-1/5'>
                    <SidebarPage />
                </div>
                <div className='w-9/12'>
                    <h1 className='font-nunito text-4xl ml-96 mt-3'>Add Todo</h1>

                </div>
            </div>

        </>
    )
}

export default Home;