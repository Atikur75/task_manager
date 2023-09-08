import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Dna } from 'react-loader-spinner';
import { RiEyeCloseFill, RiEyeFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const navigate = useNavigate();

    let [email, setEmail] = useState('');
    let [name, setName] = useState('');
    let [password, setPassword] = useState('');
    let [emailErr, setEmailErr] = useState('');
    let [nameErr, setNameErr] = useState('');
    let [passwordErr, setPasswordErr] = useState('');
    let [loading, setLoading] = useState(false);
    let [eyeshow, setEyeShow] = useState(false);

    let handleEmail = (e) => {
        setEmail(e.target.value);
        setEmailErr('');
    }

    let handlePassword = (e) => {
        setPassword(e.target.value);
        setPasswordErr('');
    }

    let handleSubmit = () => {
        if (!email) {
            setEmailErr('Email is required!');
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {
            setEmailErr('Email is invalid!');
        }
        if (!password) {
            setPasswordErr('Password is required!');
        }
        if (email && password && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(email)) {
            setLoading(true);
            if (localStorage.getItem(email) == password) {
                localStorage.setItem('current_user', localStorage.getItem(email + '_username'));
                localStorage.setItem(localStorage.getItem(email + '_username')+'_task', JSON.stringify([]));
                navigate('/');
            } else {
                console.log('error')
            };

        }
    }

    return (
        <div className='flex justify-center'>
            <ToastContainer position="top-right" theme="colored" />
            <div className='w-[30%] flex justify-end mr-16 mt-7'>
                <div className=''>
                    <h1 className='font-nunito font-bold text-4xl text-header-res'>Login to your account!</h1>
                    <div className='relative mt-9'>
                        <input onChange={handleEmail} type="email" value={email} className='border border-solid rounded-lg border-border-color-res w-96 py-6 px-14' />
                        <p className='font-nunito font-semibold text-sm text-header-res absolute top-[-10px] left-10 bg-white px-[18px]'>Email Address
                        </p>
                        {emailErr && (
                            <p className='font-nunito font-semibold text-xl text-red-600 ml-1.5'>{emailErr}</p>
                        )}
                    </div>
                    <div className='relative mt-9'>
                        <input onChange={handlePassword} type={eyeshow ? "text" : "password"} value={password} className='border border-solid rounded-lg border-border-color-res w-96 py-6 px-14' />
                        <p className='font-nunito font-semibold text-sm text-header-res absolute top-[-10px] left-10 bg-white px-[18px]'>Password</p>
                        {eyeshow ? (
                            <RiEyeFill onClick={() => setEyeShow(!eyeshow)} className='absolute top-[30px] right-16' />
                        ) : (
                            <RiEyeCloseFill onClick={() => setEyeShow(!eyeshow)} className='absolute top-[30px] right-16' />
                        )}

                        {passwordErr && (
                            <p className='font-nunito font-semibold text-xl text-red-600 ml-1.5'>{passwordErr}</p>
                        )}
                    </div>
                    {loading ? (
                        <div className='flex justify-center w-96 mt-10'>
                            <Dna
                                visible={true}
                                height="70"
                                width="70"
                                ariaLabel="dna-loading"
                                wrapperStyle={{}}
                                wrapperClass="dna-wrapper"
                            />
                        </div>
                    ) : (
                        <button onClick={handleSubmit} className='w-96 bg-button rounded-full font-nunito font-semibold text-xl text-white py-5 mt-10'>Sign In</button>
                    )}
                    <p className='w-96 font-open font-regular text-sm text-already mt-9 text-center'>Don’t have an account ? <Link to='/registration' className='font-open font-bold text-signin cursor-pointer'>Sign Up</Link></p>
                </div>
            </div>

        </div>
    )
}

export default LoginPage