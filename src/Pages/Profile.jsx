import { Upload } from 'lucide-react'
import { useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'


export default function Profile() {
    const info = Cookies.get()
    const [resume, setResume] = useState()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [contactNo, setContactNo] = useState()
    const [branch, setBranch] = useState("")
    const [stream, setStream] = useState("")

    const handleSubmit = async (e) => {
        try {
            const ref = "plugin::users-permissions.user";
            let formdata = new FormData();
            formdata.append("ref", "plugin::users-permissions.user")
            formdata.append("field", "resume")
            formdata.append("refid", info.Id)
            formdata.append("files",resume)
            e.preventDefault();
            const response = await axios.post("https://strapi-server-muof.onrender.com/api/profiles", {
                data: {
                    firstname: firstName,
                    lastname: lastName,
                    email: email,
                    mobilenumber: contactNo,
                    branch: branch,
                    stream: stream
                }
            },
                {
                    //option
                    headers: {
                        Authorization: `Bearer ${info.UserJwtToken}`
                    },
                })
            console.log(response)
            const res = await axios.post("http://localhost:1337/api/upload", formdata,
                {
                    //option
                    headers: {
                        Authorization: `Bearer ${info.UserJwtToken}`
                    },
                })
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="w-full h-full flex items-center justify-center mt-24 mb-10">
            <form className="flex flex-col items-center justify-center gap-10" onSubmit={(e)=>handleSubmit(e)}>
                <section>
                    <div className="w-[720px] border border-slate-200 px-20 py-8 rounded-lg text-[14px]">
                        <div className="text-[16px] font-semibold text-center mb-8"><p>Profile Details</p></div>
                        <div>
                            <div className="flex items-center justify-center gap-9 mb-6">
                                <div>
                                    <label className="font-semibold">First Name</label>
                                    <input type="text" placeholder="Enter your First Name" className="border border-slate-400 rounded-lg px-4 py-2 w-[260px] text-[12px] mt-1"  onChange={(e) => setFirstName(e.target.value)} />
                                </div>
                                <div>
                                    <label className="font-semibold">Last Name</label>
                                    <input type="text" placeholder="Enter your Last Name" className="border border-slate-400 rounded-lg px-4 py-2 w-[260px] text-[12px] mt-1"  onChange={(e) => setLastName(e.target.value)} />
                                </div>
                            </div>
                            <div className="flex flex-col gap-6 mb-6">
                                <div>
                                    <label className="font-semibold">Email</label>
                                    <input type="email" placeholder="Enter your Email" className="border border-slate-400 rounded-lg px-4 py-2 w-full text-[12px] mt-1"  onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div>
                                    <label className="font-semibold">Contact number</label>
                                    <input type="number" placeholder="Enter your Contact Number" className="border border-slate-400 rounded-lg px-4 py-2 w-full text-[12px] mt-1"  onChange={(e) => setContactNo(e.target.value)} />
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-9 mb-6">
                                <div>
                                    <label className="font-semibold">Branch</label>
                                    <input type="text" placeholder="Enter your Branch" className="border border-slate-400 rounded-lg px-4 py-2 w-[260px] text-[12px] mt-1"  onChange={(e) => setBranch(e.target.value)} />
                                </div>
                                <div>
                                    <label className="font-semibold">Stream</label>
                                    <input type="text" placeholder="Enter your Stream" className="border border-slate-400 rounded-lg px-4 py-2 w-[260px] text-[12px] mt-1"  onChange={(e) => setStream(e.target.value)} />
                                </div>
                            </div>
                            <div className='mt-8'>
                                <div className="flex flex-col gap-2">
                                    <div className='flex items-center gap-6'>
                                        <label htmlFor='infile' className="flex items-center justify-center gap-2 border border-slate-500 font-medium px-2 py-2 w-[140px] rounded-lg text-[12px] cursor-pointer"><Upload className='w-4' />Upload Resume</label>
                                        <div>
                                            <p>{resume?.name}</p>
                                        </div>
                                    </div>
                                    <input type="file" id="infile" className=' hidden' onChange={(e) => setResume(e.target.files[0])} />
                                    <p className="text-[12px] opacity-80">Upload a Resume of yourself (Max file size: 5Mb. File type - pdf)</p>
                                </div>
                            </div>
                        </div>
                        <button className="w-full bg-black text-white px-5 py-3 rounded-lg text-[12px] font-semibold text-center mt-10 mb-5 opacity-40" disabled>Submit</button>
                    </div>
                </section>
            </form>
        </div>
    )
}