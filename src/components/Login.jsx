import React, { useState } from 'react'
import CustomInput from './CustomInput'
import CustomPassword from './CustomPassword';
import rightarrow from '../assets/right-arrow.png';
import { redirect, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [formValues, setFormValues] = useState({
        email: "",
        password: "",
        rememberMe: false,
    })

    const handleFormValues = (event, handlertype) => {
        const tempValues = {...formValues};
        switch (handlertype) {
            case 'email':
                tempValues['email'] = event.target.value;
                setFormValues(tempValues);
                break;
            case 'password':
                tempValues['password'] = event.target.value;
                setFormValues(tempValues);
                break;
            case 'rememberMe':
                tempValues['rememberMe'] = event.target.checked;
                setFormValues(tempValues);
                break;
            default:
                setFormValues(tempValues);
                break;
        }
    }

    const handleLogin = () => {
        // validataion 

        // const validated = handleValidation()
        console.log('handleLogin', formValues);
        navigate('/browse');
    }
  return (
    <div className='bg-[#f6f6f6] w-2/4'>
        <div className='mt-6'>
            <div className='py-5'>
                <div className='px-14'>
                <h2 className='text-3xl font-extrabold uppercase my-8'>Login</h2>
                    <div className='text-white'>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <fieldset>
                                <div className="mx-3 my-0">
                                    <p className="text-sm font-medium my-3.5 text-black">Please enter your e-mail address and password.</p>
                                </div>
                                <CustomInput text={"* E-mail address"} type={'email'} value={formValues?.email} handleChange={(e) => handleFormValues(e, 'email')}/>
                                <CustomPassword text={"* Password"} value={formValues?.password} handleChange={(e) => handleFormValues(e, 'password')}/>
                                <div className='flex justify-start items-center gap-3'>
                                    <input className='mt-5 h-[20px] w-[20px]' type='checkbox' value={formValues?.rememberMe} onChange={(e) => handleFormValues(e, 'rememberMe')}/>
                                    <span className='text-black relative mt-5'>Remember me</span>
                                </div>
                                <div className='flex justify-end'>
                                    <button className='bg-black flex justify-center items-center gap-2 uppercase text-center text-white py-3 hover:scale-y-125 px-20' onClick={handleLogin}>
                                        login 
                                    <img className='w-6 h-6' alt='arrow' src={rightarrow}/>
                                    </button>
                                </div>
                                <div className='underline float-right text-black text-right py-6'>
                                        <a>Forgot your password?</a>
                                    </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login