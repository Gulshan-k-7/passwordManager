import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';

const Manage = () => {
    const [form, setform] = useState({ site: "", username: "", password: "" })
    // const [passwordArray, setPasswordArray] = useState([])
const [passwordArray, setPasswordArray] = useState(() => {
    const saved = localStorage.getItem("password");
    return saved ? JSON.parse(saved) : [];
});

    const ref = useRef()
    const showpassword = () => {
        // alert("show password")
        if (ref.current.src.includes("icons/hidden.png")) {
            ref.current.src = "icons/eye.png"

        }
        else {
            ref.current.src = "icons/hidden.png"

        }
    }
    const savePassword = () => {
    const updatedArray = [...passwordArray, form];
    setPasswordArray(updatedArray);
    localStorage.setItem("password", JSON.stringify(updatedArray)); // ✅ Pass the updated array
}

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <>
            <div className=' bg-gray-200 mycontainer size-3/4 my-20'>
                <div className='logo font-bold text-4xl text-center'>
                    <span className='text-green-500'>&lt;</span>
                    Pass
                    <span className='text-green-500'>OP/&gt;</span>
                </div>
                <div className='flex flex-col p-4 gap-2 items-center'>
                    <p className='text-green-500'>Your Own Password Manager</p>
                    <input value={form.site} onChange={handleChange} placeholder='Enter Url' className='rounded-full px-2 py-2 border border-green-600 w-full' type="text" name="site" id='' />
                    <div className='flex justify-between w-full gap-4'>

                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full px-2 py-2 border border-green-600 w-full' type="text" name='username' id='' />

                        <div className='relative z-10 '>
                            <input value={form.password} onChange={handleChange} placeholder='Enter Passwordddd' className='rounded-full px-2 pr-8 py-2 border border-green-600 w-full ' type="text" name='password' id='' />
                            <span className='absolute right-[5px] top-[7px] cursor-pointer' onClick={showpassword}>
                                <img ref={ref} className=" p-1" width={30} src="icons/eye.png" alt="eye" />
                            </span>

                        </div>
                    </div>
                    <button className='flex w-fit bg-green-500 hover:bg-green-400 rounded-full px-3 py-2 ' onClick={savePassword}>
                        <lord-icon
                            src="https://cdn.lordicon.com/efxgwrkc.json"
                            trigger="hover">
                        </lord-icon>
                        Add Password</button>
                </div>
                <div>
                    <h2 className='font-bold my-2'>Your Passward</h2>
                    {passwordArray.length === 0 && <div>No passward</div>}
                    {passwordArray.length != 0 && <table className="w-full border-collapse text-center rounded-md overflow-hidden">
                        <thead> 
                            <tr className="bg-green-700 ">
                                <th className="py-2 font-bold border-b-2 text-white">Site</th>
                                <th className="py-2 font-bold border-b-2 text-white">User</th>
                                <th className="py-2 font-bold border-b-2 text-white">Passward</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-200'>
                            {passwordArray.map((item, index)=>{
                                return  <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                                <td className="px-4 py-2"><a href={item.site} target='_blank'>{item.site}</a></td>
                                <td className="px-4 py-2">{item.username}</td>
                                <td className="px-4 py-2">{item.password}</td>
                            </tr>

                            })}
                        </tbody>
                    </table>
                    }
                </div>
            </div>
        </>
    )
}

export default Manage
