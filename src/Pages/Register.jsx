import { useState } from "react"
import axios from 'axios'
import atMail from '../Assests/atMail.svg'
import pass from '../Assests/password.svg'
import eyeOpen from '../Assests/eyeOpen.svg'
import eyeClose from '../Assests/eyeClose.svg'
import spin from '../Assests/spin.svg'
import user from '../Assests/user.svg'
import { Link } from "react-router-dom"

export default function Register() {
    const [show, setShow] = useState(false)
    const [username, setUsername] = useState("")
    const [emailID, setEmailID] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    async function handleSubmit(e) {
        try {
            setLoading(true)
            e.preventDefault();
            const response = await axios.post("https://strapi-server-muof.onrender.com/api/auth/local/register",
                {
                    username: username,
                    email: emailID,
                    password: password,
                })
            setLoading(false);
            e.target.reset();
            return response;
        } catch (error) {
            setLoading(false);
            console.log(error.response.data.error.message)
        }
    }
    function handleIcons() {
        setShow(!show)
    }
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-[320px] bg-white border border-slate-200 rounded-lg px-8 py-10">
                <div className="mb-5 leading-tight">
                    <p className="text-xl font-semibold">Create your Account</p>
                    <p className="text-sm text-slate-400">Sign up to continue</p>
                </div>
                <form onSubmit={handleSubmit} className=" flex flex-col items-center justify-center gap-4 text-sm w-full">
                    <div className="relative w-full">
                        <input type="text" placeholder="Enter the Username" onChange={(e) => setUsername(e.target.value)} className="border border-slate-400 rounded-lg px-8 py-2 w-full" required/>
                        <div className="absolute top-2 left-2 w-5">
                            <img src={user} alt="mailsvg" />
                        </div>
                    </div>
                    <div className="relative w-full">
                        <input type="text" placeholder="Enter the Email Id" onChange={(e) => setEmailID(e.target.value)} className="border border-slate-400 rounded-lg px-8 py-2 w-full" required/>
                        <div className="absolute top-2 left-2 w-5">
                            <img src={atMail} alt="mailsvg" />
                        </div>
                    </div>
                    <div className="relative w-full">
                        {show ? (
                            <input type="text" placeholder="Enter the Password" onChange={(e) => setPassword(e.target.value)} className="border border-slate-400 rounded-lg px-8 py-2 w-full" required/>
                        ) : (
                            <input type="password" placeholder="Enter the Password" onChange={(e) => setPassword(e.target.value)} className="border border-slate-400 rounded-lg px-8 py-2 w-full" required/>
                        )}
                        <div className="absolute top-2 left-2 w-5">
                            <img src={pass} alt="passwordsvg" />
                        </div>
                        <div className="absolute top-2 right-2 w-5" onClick={handleIcons}>
                            {show ? (<img src={eyeClose} alt="eyeclose" />) : (<img src={eyeOpen} alt="eyeopen" />)}
                        </div>
                    </div>
                    {!loading ? (
                        <button type="submit" className="bg-black text-white px-4 py-2 rounded-lg w-full">Register</button>
                    ) : (
                        <button type="submit" className="bg-black text-white px-4 py-2 rounded-lg w-full text-center flex items-center justify-center gap-2 opacity-50" disabled>
                            <img src={spin} alt="mailsvg"  className="animate-spin w-4"/>
                            <div><p>Register</p></div>
                        </button>
                    )}
                </form>
                <div className="text-sm mt-5"><p>Already have an account? <Link to="/login" className="font-semibold underline">Login</Link></p></div>
            </div>
        </div>
    )
}