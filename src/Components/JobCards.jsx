import HomeIcon from '@mui/icons-material/Home';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PaymentIcon from '@mui/icons-material/Payment';
import WorkIcon from '@mui/icons-material/Work';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { useNavigate } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';


export default function JobCards(props) {
    const data = props.data
    const id = props.id
    const navigate = useNavigate();
    return (
        <div className="sm:w-[480px] w-[320px] bg-white border border-slate-200 px-5 py-5 rounded-lg text-sm ">
            <div className='border border-black w-24 text-[11px] mb-2 gap-[2px] flex items-center justify-center font-medium'>
                <div>
                    <TrendingUpIcon fontSize='smaller' />
                </div>
                <div>
                    {data.IsActive ? (<p>Actively Hiring</p>) : (null)}
                </div>
            </div>
            <div className="flex items-start justify-between gap-4">
                <div className="leading-tight mb-2">
                    <div><p className='font-bold uppercase mb-2 text-base leading-tight'>{data.Role}</p></div>
                    <div><p className='font-semibold'>{data.companyName}</p></div>
                </div>
                <div>
                    {/* <img src={"http://localhost:1337" + data.companyLogo.data.attributes.url} alt="" className="px-4" /> */}
                </div>
            </div>
            <div className='flex items-center gap-4 text-[14px] mb-2'>
                <div className="flex items-center justify-center gap-1">
                    <div><HomeIcon fontSize='smaller' /></div>
                    <div><p className='mt-1'>{data.modeOfWork}</p></div>
                </div>
                <div className="flex items-center justify-center gap-1 ">
                    <div><LocationOnIcon fontSize='smaller' /></div>
                    <div><p className='mt-1'>{data.location}</p></div>
                </div>
            </div>
            <div className='flex sm:flex-row flex-col sm:items-center items-start sm:gap-10 gap-2 mb-2'>
                <div className='flex flex-col'>
                    <div className='flex items-center gap-1 text-[12px] text-gray-600'>
                        <div><PlayCircleOutlineIcon fontSize='smaller' /></div>
                        <div><p className='font-semibold mt-1'>START DATE</p></div>
                    </div>
                    <div><p className='ml-1'>immediately</p></div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex items-center gap-1 text-[12px] text-gray-600'>
                        <div><PaymentIcon fontSize='smaller' /></div>
                        <div><p className='font-semibold mt-1'>CTC (ANNUAL)</p></div>
                    </div>
                    <div><p className='ml-1'>₹ {data.MinCTC} - {data.MaxCTC}</p></div>
                </div>
                <div className='flex flex-col'>
                    <div className='flex items-center gap-1 text-[12px] text-gray-600'>
                        <div><WorkIcon fontSize='smaller' /></div>
                        <div><p className='font-semibold mt-1'>EXPERIENCE</p></div>
                    </div>
                    <div><p className='ml-1'>{data.yearOfExperience} years</p></div>
                </div>
            </div>
            <div className='mt-4'>
                <button className='bg-black text-white px-3 py-[6px] rounded-lg' onClick={() => { navigate(`/jobdetails/${id}`) }}>View details</button>
            </div>
        </div>
    )
}