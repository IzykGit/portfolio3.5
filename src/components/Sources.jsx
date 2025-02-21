import React, { useEffect, useState } from 'react'

const Sources = () => {
    const [experienceData, setExperienceData] = useState()
    const [projectData, setProjectData] = useState()
    const [data, setData] = useState(null)
    const [source, setSource] = useState({ value: "Experience" })

    const handleOpenSet = (buttonVal) => {
        setSource({ value: buttonVal })

        if (buttonVal === "Experience") {
            setData(experienceData)
        }
        else if (buttonVal === "Projects") {
            setData(projectData)
        }
    }

    useEffect(() => {
        const getData = async () => {
            const experience = await fetch('/data/Experience.json');
            const expData = await experience.json()

            const projects = await fetch('/data/Projects.json')
            const proData = await projects.json()

            setExperienceData(expData)
            setProjectData(proData)
            setData(expData)
        }

        getData()
    }, [])

    return (
        <section className='flex flex-col w-full h-fit'>
            <div className='flex gap-12'>
                <button className="flex items-center justify-center px-8 py-2 border border-black bg-transparent text-black
                    dark:border-gray-600 relative group transition duration-200 cursor-pointer active:scale-[0.95] w-46"
                    value={"Experience"}
                    onClick={(e) => handleOpenSet(e.target.value)}
                >
                    <div className="absolute -bottom-2 -right-2 bg-gray-300 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
                    <span className="relative">
                    </span>
                    Experience
                    {source.value === "Experience" && (
                        <div className="w-1 h-1 sm:w-2 sm:h-2 bg-green-400 rounded-full absolute right-2"></div>
                    )}
                </button>

                <button className="flex items-center justify-center px-8 py-2 border border-black bg-transparent text-black
                    dark:border-gray-600 relative group transition duration-200 cursor-pointer active:scale-[0.95] w-46"
                    value={"Projects"}
                    onClick={(e) => handleOpenSet(e.target.value)}
                >
                    <div className="absolute -bottom-2 -right-2 bg-gray-300 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
                    <span className="relative">

                    </span>
                    Projects
                    {source.value === "Projects" && (
                        <div className="w-1 h-1 sm:w-2 sm:h-2 bg-green-400 rounded-full absolute right-2"></div>
                    )}
                </button>
            </div>

            <div className="border-[#D9D9D9] w-full h-fit pt-8 pb-4 sm:px-8">
                <h3 className="text-2xl font-bold">{data?.heading}</h3>

                {data?.heading === "Experience" && (
                    <ul className="list-disc px-6 sm:px-12 pt-6">
                        {data?.jobs.map(job => (
                            <li key={job.id}>
                                <div className="mb-4">
                                    <h4 className="font-semibold text-xl">{job.company}</h4>
                                    <p className="italic">{job.startDate} - {job.endDate}</p>
                                </div>

                                <ul className="flex flex-col gap-4 list-disc px-6">
                                    {job?.points.map(point => (
                                        <li key={point.id} className='font-light text-md'>{point.text}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                )}

                {data?.heading === "Projects" && (
                    <ul className="list-disc px-6 sm:px-12 pt-6 flex flex-col gap-12">
                        {data?.projects.map(project => (
                            <li key={project.id}>
                                <div>
                                    <h4 className="font-semibold text-xl">{project.name}</h4>
                                </div>

                                <div className="flex flex-col gap-6 -mt-2">
                                    <div></div>
                                    <img src={project.src} alt={project.name} />
                                    <div className="flex gap-4">
                                        <a className="flex items-center justify-center px-8 py-2 border border-black bg-transparent text-black
                                            dark:border-gray-600 relative group transition duration-200 cursor-pointer active:scale-[0.95] w-46"
                                            aria-label="View the demo site."
                                            href={project.link}
                                            target="_blank"
                                        >
                                            <div className="absolute -bottom-2 -right-2 bg-gray-300 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
                                            <span className="relative">
                                            </span>
                                            Demo
                                        </a>
                                        <a className="flex items-center justify-center px-8 py-2 border border-black bg-transparent text-black
                                            dark:border-gray-600 relative group transition duration-200 cursor-pointer active:scale-[0.95] w-46"
                                            aria-label="View the code for the site."
                                            href={project.code}
                                            target="_blank"
                                        >
                                            <div className="absolute -bottom-2 -right-2 bg-gray-300 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
                                            <span className="relative">
                                            </span>
                                            Code
                                        </a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </section>
    )
}

export default Sources