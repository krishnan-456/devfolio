import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom"
import Random from "./Random";
import PersonIcon from '@mui/icons-material/Person';
import logout from '../Assests/logout.svg'
import profile from '../Assests/profile.svg'
import { Menu, X, User, LogOut } from "lucide-react";
import { useState } from "react";


export default function Navbar() {
    const navigate = useNavigate();
    const data = Cookies.get()
    const [nav, setNav] = useState(false)
    function signOut() {
        Cookies.remove('UserJwtToken');
        Cookies.remove('UserName');
        Cookies.remove('Email');
        Cookies.remove('Id');
        navigate("/login")
    }
    function handleClick() {
        setNav(!nav)
    }
    return (
        <div>
            <div className="w-full h-16 border-b fixed top-0 border-slate-200 flex items-center justify-between lg:px-14 sm:px-10 px-5 z-50 bg-white">
                <Link to="/" >
                    <div className="leading-tight">
                        <div className="font-bold text-2xl"><p>Devfolio</p></div>
                        <div className="text-black text-[10px]"><p>Bridging Opportunities, Empowering Careers</p></div>
                    </div>
                </Link>
                <div className="md:hidden block" onClick={handleClick}><Menu /></div>
                <div className="md:block hidden">
                    <div className="flex items-center justify-center gap-6 text-sm cursor-pointer font-medium">
                        <p className="hover:text-gray-600">About</p>
                        <p className="hover:text-gray-600">Pricing</p>
                        <p className="hover:text-gray-600 mr-6">Contact</p>
                        {!data.UserName ? (
                            <button className="bg-black text-white px-5 py-2 rounded-lg text-sm" onClick={() => navigate("/login")}>Login</button>
                        ) : (
                            <div className="dropdown">
                                <Random />
                                <div className="dropdown-content bg-white border border-slate-200 rounded-lg" >
                                    <div className="flex flex-col items-start justify-center px-4 py-4 text-[14px]">
                                        <div className="font-bold underline"><p>{data.UserName}</p></div>
                                        <div><p className="text-[10px] text-gray-600">{data.Email}</p></div>
                                        <div className="flex items-center justify-center gap-2 pt-4 text-[13px] text-black " onClick={()=>navigate("/profile")}>
                                            {/* <div><img src={profile} alt="profile" className="w-4" /></div> */}
                                            <div>
                                                <p className="">Profile</p>
                                            </div>
                                        </div>
                                        {/* <div className="flex items-center justify-center gap-2 hover:bg-slate-50 rounded-full px-4 py-2">
                                    <div>
                                        <p>Setting</p>
                                    </div>
                                </div> */}
                                        {/* <div className="flex items-center justify-center gap-2 hover:bg-slate-50 rounded-full px-4 py-2">
                                    <div>
                                        <p>Accounts</p>
                                    </div>
                                </div> */}
                                        {/* <div className="w-full h-[1px] bg-slate-200 my-2"></div> */}
                                        <div onClick={signOut} className="flex items-center justify-center gap-2 pt-4 text-[13px] text-black">
                                            {/* <div><img src={logout} alt="logout" className="w-4" /></div> */}
                                            <div><p className="">Logout</p></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div >
            <div className={nav ? "w-full h-screen bg-black z-50 fixed top-0 text-white md:hidden" : "w-full h-screen bg-black z-50 fixed top-[-99999px] text-white"}>
                <div className="flex items-center justify-between my-3 px-5">
                    <Link to="/" onClick={() => setNav(!nav)}>
                        <div className="leading-tight">
                            <div className="font-bold text-2xl"><p>Devfolio</p></div>
                            <div className="text-[10px]"><p>Bridging Opportunities, Empowering Careers</p></div>
                        </div>
                    </Link>
                    <div className="text-white" onClick={handleClick}><X /></div>
                </div>
                <div className="w-full h-[80vh] flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center gap-14 text-sm cursor-pointer font-medium">
                        <p>About</p>
                        <p>Pricing</p>
                        <p>Contact</p>
                    </div>
                </div>
                <div>
                    {!data.UserName ? (
                        <div className="flex items-center justify-center">
                            <button onClick={() => { navigate("/login"); setNav(!nav) }} className="text-black text-[14px] flex items-center justify-center gap-2 bg-white px-4 py-2 rounded-md font-medium">
                                <LogOut className="text-black w-4" />
                                Login
                            </button>
                        </div>
                    ) : (
                        <div className="w-full absolute bottom-0 mb-3">
                            <div className="text-white flex items-center justify-between px-5">
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-10 h-10 border border-slate-200 rounded-full flex items-center justify-center">
                                        <User className="w-4" />
                                    </div>
                                    <div>
                                        <div><p>{data.UserName}</p></div>
                                        <div><p className="text-[10px]">{data.Email}</p></div>
                                    </div>
                                </div>
                                <div className="w-10 h-10 border border-slate-200 flex items-center justify-center rounded-full" onClick={signOut}>
                                    <LogOut className="text-white w-4" />
                                </div>
                            </div>
                        </div >
                    )
                    }
                </div >
            </div >
        </div >
    )
}