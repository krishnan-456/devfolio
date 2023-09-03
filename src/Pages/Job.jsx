import axios from "axios"
import Cookies from "js-cookie"
import { useEffect, useState } from "react"
import JobCards from "../Components/JobCards"
import Loader from "../Components/Loader"
import SearchIcon from '@mui/icons-material/Search';
import { Checkbox } from "@mui/material"
import { CitiesLocation } from "../Constants/CitiesLocation"
import { Filter, X } from "lucide-react"

export default function Job() {
    const data = Cookies.get()
    const [jobs, setJobs] = useState([])
    const [filter, setFilter] = useState("")
    const [originalJobs, setOriginalJobs] = useState([])
    const [loading, setLoading] = useState(true)
    const [workFromHome, setWorkFromHome] = useState(false)
    const [onSite, setOnSite] = useState(false)
    const [search, setSearch] = useState("")
    const [locations, setLocations] = useState("")
    const [yearOfExperiences, setYearOfExperiences] = useState("")

    useEffect(() => {
        let filteredJobs = [];
        originalJobs?.map((job) => {
            if (job?.attributes?.Role?.toLowerCase().includes(search.toLowerCase()) || job?.attributes?.companyName?.toLowerCase().includes(search.toLowerCase())) {
                filteredJobs.push(job)
            }
        })
        setJobs(filteredJobs)

    }, [search])

    useEffect(() => {
        let filteredJobs = [];
        originalJobs?.map((job) => {
            if (job?.attributes?.location?.toLowerCase().includes(locations.toLowerCase())) {
                filteredJobs.push(job)
            }
        })
        setJobs(filteredJobs)

    }, [locations])

    useEffect(() => {
        let filteredJobs = [];
        originalJobs?.map((job) => {
            let arr = job?.attributes?.yearOfExperience.split("-")[1]
            console.log(parseInt(arr), parseInt(yearOfExperiences))
            if (yearOfExperiences === "5") {
                if (parseInt(arr) >= 5)
                    filteredJobs.push(job)
            }
            else if (parseInt(arr) == parseInt(yearOfExperiences)) {
                filteredJobs.push(job)
            }
        })
        console.log("filtered jobs", filteredJobs)
        setJobs(filteredJobs)

    }, [yearOfExperiences])

    useEffect(() => {
        let filteredJobs = [];
        let flag = ""
        if (workFromHome === true) {
            flag = "Work from home"
        }
        if (onSite === true) {
            flag = "Onsite"
        }
        if (workFromHome === true && onSite === true) {
            flag = ""
        }
        originalJobs?.map((job) => {
            if (job?.attributes?.modeOfWork?.toLowerCase().includes(flag.toLowerCase())) {
                filteredJobs.push(job)
            }
        })
        setJobs(filteredJobs)

    }, [workFromHome, onSite])


    const handleClick = () => {
        setFilter(!filter)
    }
    const handleWorkFromHome = (e) => {
        setWorkFromHome(!workFromHome)
    };
    const handleOnSite = (e) => {
        setOnSite(!onSite)
    };
    useEffect(() => {
        async function fetchJobs() {
            const response = await axios.get("https://strapi-server-muof.onrender.com/api/job-details?populate=*", {
                headers: {
                    Authorization: `Bearer ${data.UserJwtToken}`
                },
            })
            setJobs(response.data.data)
            console.log(response.data.data)
            setOriginalJobs(response.data.data)
            setLoading(false)
        }
        fetchJobs()
    }, [])

    return (
        <>
            {loading ? (<Loader />) : (
                <div className="w-full h-full flex sm:flex-row flex-col items-center justify-center xl:pl-40 sm:pl-60 mt-20">
                    <div className="w-[30%] h-screen fixed top-14 left-0 border border-r border-slate-200 py-10 px-5 text-[14px] sm:block hidden">
                        <div className="relative mb-5">
                            <input type="text" placeholder="Search a Job or Company" className="border border-slate-400 rounded-full px-4 py-2 w-full" onChange={(e) => setSearch(e.target.value)} />
                            <div className=" bg-black rounded-full px-[10px] py-[9px] text-white absolute top-0 right-0 cursor-pointer">
                                <SearchIcon fontSize="small" />
                            </div>
                        </div>
                        <div className="flex items-center">
                            <Checkbox
                                sx={{
                                    color: "black",
                                    '&.Mui-checked': {
                                        color: "black",
                                    },
                                }}
                                value={workFromHome}
                                onChange={handleWorkFromHome}
                                size="small"
                            />
                            <p className="mt-[2px]">Work from Home</p>
                        </div>
                        <div className="flex items-center">
                            <Checkbox
                                sx={{
                                    color: "black",
                                    '&.Mui-checked': {
                                        color: "black",
                                    },
                                }}
                                value={onSite}
                                onChange={handleOnSite}
                                size="small"
                            />
                            <p className="mt-[2px]">On Site</p>
                        </div>

                        <div className="mt-5">
                            <select name="Location" placeholder="Location" className="border border-slate-400 rounded-full px-4 py-2 w-full cursor-pointer" onChange={(e) => setLocations(e.target.value)}>
                                <option value={""}>Choose Location</option>
                                {
                                    CitiesLocation?.map((cities) => (
                                        <option value={cities.name} className="" key={cities.id}>{cities.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="mt-5">
                            <select name="yearOfExperience" className="border border-slate-400 rounded-full px-4 py-2 w-full cursor-pointer" onChange={(e) => setYearOfExperiences(e.target.value)} >
                                <option value={""}>Choose Experiences</option>
                                <option value={"5"}>Above 5 years</option>
                                <option value={"4"}>4 years</option>
                                <option value={"3"}>3 years</option>
                                <option value={"2"}>2 years</option>
                                <option value={"1"}>1 years</option>
                                <option value={"freshers"}>Freshers</option>
                            </select>
                        </div>
                    </div>
                    <div className="w-full px-5 mt-5 text-[12px] sm:hidden block">
                        <div className="">
                            <div className="relative">
                                <input type="text" placeholder="Search a Job or Company" className="border border-slate-400 rounded-full px-4 py-2 w-full" onChange={(e) => setSearch(e.target.value)} />
                                <div className=" bg-black rounded-full px-[8px] py-[8px] text-white absolute top-0 right-0 cursor-pointer">
                                    <SearchIcon fontSize="small" />
                                </div>
                            </div>
                            <div onClick={handleClick} className="flex items-center justify-center gap-1 border border-slate-300 px-2 py-2 rounded-full w-20 mt-4"><div>{filter?<X className="w-4 h-4"/>:<Filter className="w-4 h-4"/>}</div><p className="text-[12px]">Filter</p></div>
                        </div>
                        <div>
                            {filter ? (
                                <div className="border border-slate-200 px-4 rounded-lg py-5 mt-5">
                                    <div className="flex items-center">
                                        <Checkbox
                                            sx={{
                                                color: "black",
                                                '&.Mui-checked': {
                                                    color: "black",
                                                },
                                            }}
                                            value={workFromHome}
                                            onChange={handleWorkFromHome}
                                            size="small"
                                        />
                                        <p className="mt-[2px]">Work from Home</p>
                                    </div>
                                    <div className="flex items-center">
                                        <Checkbox
                                            sx={{
                                                color: "black",
                                                '&.Mui-checked': {
                                                    color: "black",
                                                },
                                            }}
                                            value={onSite}
                                            onChange={handleOnSite}
                                            size="small"
                                        />
                                        <p className="mt-[2px]">On Site</p>
                                    </div>

                                    <div className="mt-5">
                                        <select name="Location" placeholder="Location" className="border border-slate-400 rounded-full px-4 py-2 w-full cursor-pointer" onChange={(e) => setLocations(e.target.value)}>
                                            <option value={""}>Choose Location</option>
                                            {
                                                CitiesLocation?.map((cities) => (
                                                    <option value={cities.name} className="" key={cities.id}>{cities.name}</option>
                                                ))
                                            }
                                        </select>
                                    </div>
                                    <div className="mt-5">
                                        <select name="yearOfExperience" className="border border-slate-400 rounded-full px-4 py-2 w-full cursor-pointer" onChange={(e) => setYearOfExperiences(e.target.value)} >
                                            <option value={""}>Choose Experiences</option>
                                            <option value={"5"}>Above 5 years</option>
                                            <option value={"4"}>4 years</option>
                                            <option value={"3"}>3 years</option>
                                            <option value={"2"}>2 years</option>
                                            <option value={"1"}>1 years</option>
                                            <option value={"freshers"}>Freshers</option>
                                        </select>
                                    </div>
                                </div>
                            ) : (null)}
                        </div>

                    </div>
                    <div className=" flex flex-col py-10 ">
                        {jobs.length === 0 ? (
                            <div className="h-[60vh] flex items-center justify-center gap-2">
                                {/* <SearchIcon fontSize="medium"/> */}
                                <p className="text-[16px] font-medium">No results found</p>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center gap-6">
                                {
                                    jobs?.map((job, i) =>
                                        <div key={i}>
                                            <JobCards data={job.attributes} id={job.id} />
                                        </div>
                                    )}
                            </div>)}
                    </div >
                </div>
            )
            }
        </>
    )
}