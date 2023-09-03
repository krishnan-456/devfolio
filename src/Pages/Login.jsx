import { useState } from "react"
import axios from 'axios'
import atMail from '../Assests/atMail.svg'
import pass from '../Assests/password.svg'
import eyeOpen from '../Assests/eyeOpen.svg'
import eyeClose from '../Assests/eyeClose.svg'
import { Link, useNavigate } from "react-router-dom"
import spin from '../Assests/spin.svg'
import Cookies from 'js-cookie';
import { Toaster, toast } from 'react-hot-toast'

export default function Login() {
    const [identifier, setIdentifier] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const navigate = useNavigate();
    async function handleSubmit(e) {
        try {
            setLoading(true)
            e.preventDefault();
            const response = await axios.post("https://strapi-server-muof.onrender.com/api/auth/local",
                {
                    identifier: identifier,
                    password: password
                })
            setLoading(false);
            e.target.reset();
            Cookies.set('UserJwtToken', response.data.jwt, { expires: 1 });
            Cookies.set('UserName', response.data.user.username, { expires: 1 });
            Cookies.set('Email', response.data.user.email, { expires: 1 });
            Cookies.set('Id', response.data.user.id, { expires: 1 });
            navigate("/")
        } catch (error) {
            setLoading(false);
            toast.error(error.response.data.error.message);
            console.log(error.response.data.error.message);
        }
    }
    //cookies


    function handleIcons() {
        setShow(!show)
    }
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="text-sm">
                <Toaster
                    position="top-right"
                    reverseOrder={false}
                />
            </div>
            <div className="w-[320px] bg-white border border-slate-200 rounded-lg px-8 py-10">
                <div className="mb-8 leading-tight">
                    <p className="text-xl font-semibold">Welcome back</p>
                    <p className="text-sm text-slate-400">Login to continue</p>
                </div>
                <form onSubmit={handleSubmit} className=" flex flex-col items-center justify-center gap-4 text-sm w-full">
                    <div className="relative w-full">
                        <input type="text" placeholder="Enter the Email Id" onChange={(e) => setIdentifier(e.target.value)} className="border border-slate-400 rounded-lg px-8 py-2 w-full" required />
                        <div className="absolute top-2 left-2 w-5">
                            <img src={atMail} alt="mailsvg" />
                        </div>
                    </div>
                    <div className="relative w-full">
                        {show ? (
                            <input type="text" placeholder="Enter the Password" onChange={(e) => setPassword(e.target.value)} className="border border-slate-400 rounded-lg px-8 py-2 w-full" required />
                        ) : (
                            <input type="password" placeholder="Enter the Password" onChange={(e) => setPassword(e.target.value)} className="border border-slate-400 rounded-lg px-8 py-2 w-full" required />
                        )}
                        <div className="absolute top-2 left-2 w-5">
                            <img src={pass} alt="passwordsvg" />
                        </div>
                        <div className="absolute top-2 right-2 w-5" onClick={handleIcons}>
                            {show ? (<img src={eyeClose} alt="eyeclose" />) : (<img src={eyeOpen} alt="eyeopen" />)}
                        </div>
                    </div>
                    {!loading ? (
                        <button type="submit" className="bg-black text-white px-4 py-2 rounded-lg w-full">Login</button>
                    ) : (
                        <button type="submit" className="bg-black text-white px-4 py-2 rounded-lg w-full text-center flex items-center justify-center gap-2 opacity-50" disabled>
                            <img src={spin} alt="mailsvg" className="animate-spin w-4" />
                            <div><p>Login</p></div>
                        </button>
                    )}
                </form>
                <div className="text-sm mt-8"><p>Don't have an account? <Link to="/register" className="font-semibold underline">Register</Link></p></div>
            </div>
        </div>
    )
}