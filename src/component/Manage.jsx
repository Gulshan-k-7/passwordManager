import React from 'react'
import { useRef } from 'react';
<<<<<<< HEAD
import { useState } from 'react';
=======
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';
>>>>>>> 9db2821 (final call)

const Manage = () => {
    const [form, setform] = useState({ site: "", username: "", password: "" })
    // const [passwordArray, setPasswordArray] = useState([])
<<<<<<< HEAD
const [passwordArray, setPasswordArray] = useState(() => {
    const saved = localStorage.getItem("password");
    return saved ? JSON.parse(saved) : [];
});

    const ref = useRef()
    const showpassword = () => {
        // alert("show password")
        if (ref.current.src.includes("icons/hidden.png")) {
            ref.current.src = "icons/eye.png"
=======
    const [passwordArray, setPasswordArray] = useState([])
    const ref = useRef()
    const passwordRef = useRef()


    useEffect(() => {
        getPasswords()
    }, [])


    const savePassword = async () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length > 3) {

            // If any such id exists in the db, delete it 
            await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id: form.id }) })

            setPasswordArray([...passwordArray, { ...form, id: uuidv4() }])
            await fetch("http://localhost:3000/", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...form, id: uuidv4() }) })

            // Otherwise clear the form and show toast
            setform({ site: "", username: "", password: "" })
        }
    }
    const deletePassword = async (id) => {
        let c = confirm("do you really want to delete password?")

        if (c) {
            setPasswordArray(passwordArray.filter(item => item.id !== id))

            await fetch("http://localhost:3000/", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) })

        }


    }

    const getPasswords = async () => {
        let req = await fetch("http://localhost:3000/")
        let passwords = await req.json()
        console.log(passwords)
        setPasswordArray(passwords)
    }

    const showpassword = () => {
        // passwordRef.current.type = "text"
        // alert("show password")
        if (ref.current.src.includes("icons/hidden.png")) {
            ref.current.src = "icons/eye.png"
            passwordRef.current.type = "passwords"
>>>>>>> 9db2821 (final call)

        }
        else {
            ref.current.src = "icons/hidden.png"
<<<<<<< HEAD

        }
    }
    const savePassword = () => {
    const updatedArray = [...passwordArray, form];
    setPasswordArray(updatedArray);
    localStorage.setItem("password", JSON.stringify(updatedArray)); // ✅ Pass the updated array
}
=======
            passwordRef.current.type = "text"

        }
    }



    const copyText = (text) => {

        toast('copy to clipboard', {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

        navigator.clipboard.writeText(text)
    }


    const editPassword = (id) => {
        setform(passwordArray.filter(i => i.id === id)[0])
        // setPasswordArray(passwordArray.filter(item => item.id !== id))
        // console.log("editing")
    }

>>>>>>> 9db2821 (final call)

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }
    return (
        <>
<<<<<<< HEAD
            <div className=' bg-gray-200 mycontainer size-3/4 my-20'>
=======
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />

            <div className=" p-3 md:mycontainer  bg-gray-200 m-5 ">

>>>>>>> 9db2821 (final call)
                <div className='logo font-bold text-4xl text-center'>
                    <span className='text-green-500'>&lt;</span>
                    Pass
                    <span className='text-green-500'>OP/&gt;</span>
                </div>
<<<<<<< HEAD
                <div className='flex flex-col p-4 gap-2 items-center'>
=======
                <div className='flex flex-col p-4 gap-2 items-center '>
>>>>>>> 9db2821 (final call)
                    <p className='text-green-500'>Your Own Password Manager</p>
                    <input value={form.site} onChange={handleChange} placeholder='Enter Url' className='rounded-full px-2 py-2 border border-green-600 w-full' type="text" name="site" id='' />
                    <div className='flex justify-between w-full gap-4'>

                        <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full px-2 py-2 border border-green-600 w-full' type="text" name='username' id='' />

                        <div className='relative z-10 '>
<<<<<<< HEAD
                            <input value={form.password} onChange={handleChange} placeholder='Enter Passwordddd' className='rounded-full px-2 pr-8 py-2 border border-green-600 w-full ' type="text" name='password' id='' />
=======
                            <input ref={passwordRef} value={form.password} onChange={handleChange} placeholder='Enter Password' className='rounded-full px-2 pr-8 py-2 border border-green-600 w-full ' type="password" name='password' id='password' />
>>>>>>> 9db2821 (final call)
                            <span className='absolute right-[5px] top-[7px] cursor-pointer' onClick={showpassword}>
                                <img ref={ref} className=" p-1" width={30} src="icons/eye.png" alt="eye" />
                            </span>

                        </div>
                    </div>
<<<<<<< HEAD
                    <button className='flex w-fit bg-green-500 hover:bg-green-400 rounded-full px-3 py-2 ' onClick={savePassword}>
=======
                    <button className='flex w-fit bg-green-500 hover:bg-green-400 items-center gap-2 rounded-full px-3 py-2 ' onClick={savePassword}>
>>>>>>> 9db2821 (final call)
                        <lord-icon
                            src="https://cdn.lordicon.com/efxgwrkc.json"
                            trigger="hover">
                        </lord-icon>
<<<<<<< HEAD
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
=======
                        Save</button>
                </div>
                <div>
                    <h2 className='font-bold my-2'>Your Password</h2>
                    {passwordArray.length === 0 && <div>No password</div>}
                    {passwordArray.length != 0 && <table className="table-auto w-full rounded-md overflow-hidden mb-10">
                        <thead className='bg-green-500'>
                            <tr>
                                <th className='py-2'>Site</th>
                                <th className='py-2'>Username</th>
                                <th className='py-2'>Password</th>
                                <th className='py-2'>Actions</th>
                            </tr>
                        </thead>
                        <tbody className='bg-green-100'>
                            {passwordArray.map((item, index) => {
                                return <tr key={index} >

                                    <td className='py-0'  >
                                        <div className=" py-0 flex justify-between md:px-10 ">

                                            <div className=' pl-2 truncate max-w-[50px] md:max-w-[200px]'>
                                                <a href={item.site} target='_blank'> {item.site}</a>
                                            </div>

                                            <div className='p-2 hover:bg-gray-300  rounded-full cursor-pointer' >
                                                <img width={"20px"} src="icons/copy.svg" alt="copy" onClick={() => { copyText(item.site) }} />
                                            </div>
                                        </div>
                                    </td>

                                    <td  >
                                        <div className=" flex justify-between  md:px-10">
                                            <div className='pl-2 truncate max-w-[50px] md:max-w-[200px] '>
                                                {item.username}
                                            </div>

                                            <div className='p-2 hover:bg-gray-300  rounded-full cursor-pointer'>
                                                <img width={"20px"} src="icons/copy.svg" alt="copy" onClick={() => { copyText(item.username) }} />
                                            </div>
                                        </div>
                                    </td>

                                    <td  >
                                        <div className=" flex justify-between   md:px-10 ">
                                            <div className='pl-2 truncate max-w-[50px] md:max-w-[200px]'>
                                                {item.password}
                                            </div>

                                            <div className='p-2 hover:bg-gray-300  rounded-full cursor-pointer '>
                                                <img width={"20px"} src="icons/copy.svg" alt="copy" onClick={() => { copyText(item.password) }} />
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <div className='text-center'>
                                            <span className='mx-0  ' onClick={() => { editPassword(item.id) }}>

                                                <lord-icon
                                                    src="https://cdn.lordicon.com/exymduqj.json"
                                                    trigger="hover"
                                                    style={{ "height": "25px" }}>
                                                </lord-icon>
                                            </span>
                                            <span onClick={() => { deletePassword(item.id) }}>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/xyfswyxf.json"
                                                    trigger="hover"
                                                    style={{ "height": "25px" }}>
                                                </lord-icon>
                                            </span>
                                        </div>
                                    </td>

                                </tr>
>>>>>>> 9db2821 (final call)

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
