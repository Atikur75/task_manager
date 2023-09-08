import React, { useState } from 'react';
import { BiSolidDashboard, BiLogOut } from 'react-icons/bi'
import { IoIosCreate, IoMdDoneAll } from 'react-icons/io'
import { GoTasklist } from 'react-icons/go'
import { SiProgress } from 'react-icons/si'
import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { MdCloudUpload } from 'react-icons/md'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const SidebarPage = () => {

    const navigate = useNavigate();

    let [imageModal, setImageModal] = useState(false);

    let handleProfileUpload = () => {
        setImageModal(true);
    }

    let handleModalCancel = () => {
        setImageModal(false);
    }

    let handleLogout = () => {
        navigate('/login');
        localStorage.setItem('current_user', '');
        console.log('logout')
    }

    return (
        <div className='w-full bg-button h-screen p-9'>

            <div className='relative w-28 h-28 rounded-full group'>

                <img className='mx-auto cursor-pointer w-full h-full rounded-full' src='assests/avatar.png' />

                <div onClick={handleProfileUpload} className='w-full h-full rounded-full bg-[rgba(0,0,0,.4)] absolute top-0 left-0 flex justify-center items-center opacity-0 group-hover:opacity-100 cursor-pointer'>
                    <MdCloudUpload className='text-white text-2xl' />
                </div>
            </div>
            <h2 className='font-nunito font-bold  text-2xl text-white mt-5 ml-7'>
                Jabed
            </h2>

            <div className='flex items-center gap-x-2 mb-7 mt-7'>
                <BiSolidDashboard className='text-[#BAD1FF] text-base cursor-pointer' />
                <p className='text-[#BAD1FF] text-base cursor-pointer font-nunito'>Dashboard</p>
            </div>
            <Link to='/createtask'>
                <div className='flex items-center gap-x-2 mb-7'>
                    <AiOutlineUsergroupAdd className='text-[#BAD1FF] text-base cursor-pointer' />
                    <p className='text-[#BAD1FF] text-base cursor-pointer font-nunito'>Create Group</p>
                </div>
            </Link>
            <Link to='/createtask'>
                <div className='flex items-center gap-x-2 mb-7'>
                    <IoIosCreate className='text-[#BAD1FF] text-base cursor-pointer' />
                    <p className='text-[#BAD1FF] text-base cursor-pointer font-nunito'>Create New</p>
                </div>
            </Link>
            <Link to='/newtask'>
                <div className='flex items-center gap-x-2 mb-7'>
                    <GoTasklist className='text-[#BAD1FF] text-base cursor-pointer' />
                    <p className='text-[#BAD1FF] text-base cursor-pointer font-nunito'>New Task</p>
                </div>
            </Link>
            <Link to='/progress'>
                <div className='flex items-center gap-x-2 mb-7'>
                    <SiProgress className='text-[#BAD1FF] text-base cursor-pointer' />
                    <p className='text-[#BAD1FF] text-base cursor-pointer font-nunito'>In Progress</p>
                </div>
            </Link>
            <Link to='/completed'>
                <div className='flex items-center gap-x-2 mb-7'>
                    <IoMdDoneAll className='text-[#BAD1FF] text-base cursor-pointer' />
                    <p className='text-[#BAD1FF] text-base cursor-pointer font-nunito'>Completed</p>
                </div>
            </Link>

            <div onClick={handleLogout} className='flex items-center gap-x-2 mb-7'>
                <BiLogOut className='text-[#BAD1FF] text-base cursor-pointer' />
                <p className='text-[#BAD1FF] text-base cursor-pointer font-nunito'>LogOut</p>
            </div>

            {imageModal && (
                <div className='w-full h-screen bg-button absolute top-0 left-0 z-50 flex justify-center items-center'>
                    <div className='w-2/4 bg-white rounded-lg p-5'>
                        <h2 className='font-nunito font-bold text-3xl text-header-res'>Upload Your Profile Picture.</h2>
                        <div className='relative w-28 h-28 rounded-full group overflow-hidden mx-auto'>
                            <img className='mx-auto cursor-pointer w-full h-full rounded-full' src='assests/avatar.png' />
                        </div>
                        <input className='mt-8' type='file' />
                        <br />

                        <button className='w-1/4 bg-button rounded-lg font-nunito font-regular text-xs text-white py-3 mt-8'>Upload</button>
                        <button onClick={handleModalCancel} className='w-1/4 bg-red-500 rounded-lg font-nunito font-regular text-xs text-white py-3 mt-8 ml-8'>Cancel</button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default SidebarPage;