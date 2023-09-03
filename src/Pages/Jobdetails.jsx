import axios from "axios";
import Cookies from "js-cookie";
import HomeIcon from '@mui/icons-material/Home';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PaymentIcon from '@mui/icons-material/Payment';
import WorkIcon from '@mui/icons-material/Work';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Loader from "../Components/Loader";
import point from '../Assests/points.svg'

export default function Jobdetails() {
    const { id } = useParams();
    const data = Cookies.get()
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function fetchJobs() {
            const response = await axios.get(`https://strapi-server-muof.onrender.com/api/job-details/${id}?populate=*`, {
                headers: {
                    Authorization: `Bearer ${data.UserJwtToken}`
                },
            })
            console.log(response)
            setJobs(response.data.data.attributes)
            setLoading(false)
        }
        fetchJobs()
    }, [])
    return (
        <>
            {loading ? (<Loader />) : (
                <div className="w-full h-full flex flex-col items-start justify-center lg:px-56 sm:px-10 px-5 text-[14px] py-10 mt-20">
                    <div className="w-full font-semibold text-center text-[24px] mb-8 leading-tight uppercase"><p>{jobs.Role} Job at {jobs.companyName}</p></div>
                    <div className="w-full border border-slate-200 sm:px-8 px-4 py-4 rounded-lg">
                        <div className='border border-black w-24 my-2 gap-[2px] flex items-center justify-center font-medium text-[11px]'>
                            <div>
                                <TrendingUpIcon fontSize='smaller' />
                            </div>
                            <div>
                                {jobs.IsActive ? (<p>Actively Hiring</p>) : (null)}
                            </div>
                        </div>
                        <div><p className="font-semibold text-[18px] mt-4 leading-tight">{jobs.Role}</p></div>
                        <div><p className="font-medium text-[16px] mb-4">{jobs.companyName}</p></div>
                        <div className='flex items-center gap-4 text-[14px] mb-4'>
                            <div className="flex items-center justify-center gap-1">
                                <div><HomeIcon fontSize='smaller' /></div>
                                <div><p className='mt-1'>{jobs.modeOfWork}</p></div>
                            </div>
                            <div className="flex items-center justify-center gap-1 ">
                                <div><LocationOnIcon fontSize='smaller' /></div>
                                <div><p className='mt-1'>{jobs.location}</p></div>
                            </div>
                        </div>
                        <div className='flex sm:flex-row flex-col items-start text-[14px] md:gap-14 gap-6'>
                            <div className='flex flex-col'>
                                <div className='flex items-center gap-1 text-[12px] text-gray-600'>
                                    <div><PlayCircleOutlineIcon fontSize='smaller' /></div>
                                    <div><p className='font-semibold mt-1'>START DATE</p></div>
                                </div>
                                <div><p className=''>immediately</p></div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex items-center gap-1 text-[12px] text-gray-600'>
                                    <div><PaymentIcon fontSize='smaller' /></div>
                                    <div><p className='font-semibold mt-1'>CTC (ANNUAL)</p></div>
                                </div>
                                <div><p className=''>₹ {jobs.MinCTC} - {jobs.MaxCTC}</p></div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex items-center gap-1 text-[12px] text-gray-600'>
                                    <div><WorkIcon fontSize='smaller' /></div>
                                    <div><p className='font-semibold mt-1'>EXPERIENCE</p></div>
                                </div>
                                <div><p className=''>{jobs.yearOfExperience} years</p></div>
                            </div>
                            <div className='flex flex-col'>
                                <div className='flex items-center gap-1 text-[12px] text-gray-600'>
                                    <div><HourglassBottomIcon fontSize='smaller' /></div>
                                    <div><p className='font-semibold mt-1'>APPLY BY</p></div>
                                </div>
                                <div><p className=''>{jobs.ApplyBy}</p></div>
                            </div>
                        </div>

                        <div className="w-full h-[1px] bg-slate-200 mt-8"></div>

                        <div>
                            <div><p className="text-[16px] font-medium mt-6 mb-1">About {jobs.companyName}</p></div>
                            <div>{jobs.companyDescription.split("\n").map((data, i) => (
                                <p key={i} >{data}</p>
                            ))}</div>
                        </div>

                        <div>
                            <div><p className="text-[16px] font-medium mt-6 mb-1">About the job</p></div>
                            <div>{jobs.jobDescription.split("\n").map((data, i) => (
                                <p key={i} >{data}</p>
                            ))}</div>
                        </div>


                        <div>
                            <div><p className="text-[16px] font-medium mt-6 mb-1">Eligibility</p></div>
                            <div>{jobs.eligibility.split("\n").map((data, i) => (
                                <p key={i}>{data}</p>
                            ))}</div>
                        </div>

                        {jobs.perks ? (
                            <div>
                                <div><p className="text-[16px] font-medium mt-6 mb-1">Perks</p></div>
                                <div>{jobs.perks.split("\n").map((data, i) => (
                                    <p key={i} className="flex gap-2"><img src={point} alt={id} className="w-4 h-4"/>{data}</p>
                                ))}</div>
                            </div>
                        ) : (null)}

                        <div>
                            <div><p className="text-[16px] font-medium mt-6 mb-1">Skills required</p></div>
                            <div>{jobs.skillsRequired.split("\n").map((data, i) => (
                                <p key={i} className="flex gap-2"><img src={point} alt={id} className="w-4 h-4"/>{data}</p>
                            ))}</div>
                        </div>

                        <div>
                            <div><p className="text-[16px] font-medium mt-6 mb-1">Salary</p></div>
                            <div><p>Annual CTC: ₹{jobs.MinCTC} - {jobs.MaxCTC}/year</p></div>
                        </div>

                        <div>
                            <div><p className="text-[16px] font-medium mt-6 mb-1">Number of openings</p></div>
                            <div><p>{jobs.NoOfOpening}</p></div>
                        </div>

                        <div className="text-center mt-4 mb-2">
                            <button className="bg-black text-white px-3 py-2 rounded-lg">Apply now</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}