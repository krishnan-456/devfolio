import { Player } from '@lottiefiles/react-lottie-player';
import reactLogo from "../static/home.json";
import { useNavigate } from 'react-router-dom';
import LogoSlider from '../Components/LogoSlider';
import { Briefcase, DatabaseZap, MailCheck, PartyPopper } from 'lucide-react';
import { useState } from 'react';
import illustration1 from '../Assests/1.png'
import illustration2 from '../Assests/2.png'
import illustration3 from '../Assests/3.png'
import illustration4 from '../Assests/4.png'

export default function Home() {
    const navigate = useNavigate();
    const [imageUrl, setImageUrl] = useState(illustration1)
    return (
        <div className='mt-20'>
            <div className="w-full h-full flex lg:flex-row flex-col items-center justify-between xl:px-20 lg:px-16 md:px-10 px-5 lg:gap-40 md:gap-20 my-10 lg:text-left text-center">
                <div className='mt-10'>
                    <div><p className="lg:text-5xl text-4xl font-bold">Your Next Chapter Awaits Find Your Perfect Job Match</p></div>
                    <div><p className='text-[14px] mt-2'>Transform your career into the a new game, hire and find your jobs faster than before. Just search and apply.</p></div>
                    <div><button className='bg-black text-white px-2 py-2 rounded-md mt-4 text-[14px]' onClick={() => navigate("/jobs")}>Explore Jobs</button></div>
                </div>
                <div>
                    <Player
                        src={reactLogo}
                        className="player md:w-[400px] w-[320px]"
                        loop
                        autoplay
                        speed={2}
                    />
                </div>
            </div>
            <div className='w-full border-t border-b border-slate-200 lg:my-20 my-10 xl:px-20 lg:px-16 md:px-10 px-5 py-10'>
                <div className='text-[14px] text-center mb-10'><p>World's best companies are hiring on Devfolio</p></div>
                <LogoSlider />
            </div>
            <div className='w-full xl:px-20 lg:px-16 md:px-10 px-5 my-20'>
                <div><p className='lg:text-4xl text-3xl font-bold'>These 3 easy steps to find your dream jobs</p></div>
                <div className='flex lg:flex-row flex-col items-center justify-between gap-4 mt-10'>
                    <div className='border border-slate-200 px-4 py-8 rounded-lg'>
                        <div><p className='text-3xl font-bold mb-5'>01</p></div>
                        <div><p className='text-[16px] font-semibold mb-2'>Register your Profile</p></div>
                        <div><p className='text-[14px]'>It's totally free! You can just register if you're now new on JobWise platform, follow simple registration steps and you're ready to get started.</p></div>
                    </div>
                    <div className='border border-slate-200 px-4 py-8 rounded-lg'>
                        <div className='text-3xl font-bold mb-5'>02</div>
                        <div><p className='text-[16px] font-semibold mb-2'>Upload your Latest Resume</p></div>
                        <div><p className='text-[14px]'>Upload your latest resume to help find us a perfect jobs that matches with your background. Our Al will do that but you can still customize the search.</p></div>
                    </div>
                    <div className='border border-slate-200 px-4 py-8 rounded-lg'>
                        <div className='text-3xl font-bold mb-5'>03</div>
                        <div><p className='text-[16px] font-semibold mb-2'>Find your Dream Jobs </p></div>
                        <div><p className='text-[14px]'>We ease your job searching by provided several jobs that matches with your resume. Browse it and customize it as you like according to your needs.</p></div>
                    </div>
                </div>
            </div>
            <div className='w-full my-20 xl:px-20 lg:px-16 md:px-10 px-5'>
                <div><p className='lg:text-4xl text-3xl font-bold'>Supercharge your Job Search with Devfolio</p></div>
                <div><p className='text-[14px] mt-2'>Find your dream job Faster and Easier than ever before.</p></div>
                <div className='flex items-center justify-between text-[14px]'>
                    <div className='w-[40rem] flex flex-col items-start justify-center gap-4 lg:mt-5 mt-10'>
                        <div className='w-full bg-white rounded-lg border border-slate-200 px-4 py-4 flex items-center gap-4 cursor-pointer hover:border-black' onClick={() => setImageUrl(illustration1)}>
                            <DatabaseZap />
                            <p>Access a vast database of job listings from top companies and industries.</p>
                        </div>
                        <div className='w-full bg-white rounded-lg border border-slate-200 px-4 py-4 flex items-center gap-4 cursor-pointer hover:border-black' onClick={() => setImageUrl(illustration2)}>
                            <Briefcase />
                            <p>Apply to jobs directly through our platform, streamlining the process.</p>
                        </div>
                        <div className='w-full bg-white rounded-lg border border-slate-200 px-4 py-4 flex items-center gap-4 cursor-pointer hover:border-black' onClick={() => setImageUrl(illustration3)}>
                            <MailCheck />
                            <p> Keep track of your applications, interviews, and follow-ups all in one place.</p>
                        </div>
                        <div className='w-full bg-white rounded-lg border border-slate-200 px-4 py-4 flex items-center gap-4 cursor-pointer hover:border-black' onClick={() => setImageUrl(illustration4)}>
                            <PartyPopper />
                            <p>Access expert advice on resume building, interview tips, and career growth.</p>
                        </div>
                    </div>
                    <div className='lg:block hidden'>
                        <img src={imageUrl} alt="illustrations" width={320} />
                    </div>
                </div>
            </div>
            <div className='w-full bg-black text-white py-20 xl:px-20 lg:px-16 md:px-10 px-5'>
                <div><p className='lg:text-4xl text-3xl font-bold'>Land your Dream Job with Devfolio</p></div>
                <div><p className='text-[14px] lg:w-[750px] w-full mt-2'>Stay persistent and keep applying to opportunities that align with your goals. Leverage the resources on Devfolio to improve your skills and increase your chances of success.</p></div>
                <div><button className='bg-white text-black px-4 py-2 rounded-md mt-5 text-[14px]' onClick={() => navigate("/jobs")}>Get Started</button></div>
            </div>
            <div className='my-20 xl:px-20 lg:px-16 md:px-10 px-5'>
                <div><p className='lg:text-4xl text-3xl font-bold'>Any Devfolio suggestions?</p></div>
                <div><p className='text-[14px] mt-2'>
                Devfolio is your partner in navigating the dynamic landscape of tech job opportunities. you're on your way to discovering, applying for, and landing the job of your dreams. Explore, connect, and thrive with Devfolio !
                </p></div>
                <div><button className='bg-black text-white px-4 py-2 rounded-md mt-5 text-[14px]' onClick={() => navigate("/")}>Notify Us</button></div>
            </div>
        </div>
    )
}