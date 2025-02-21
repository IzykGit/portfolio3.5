import React from 'react'

const Tech = () => {

    const technologies = [
        {
            text: "Python",
            link: "https://docs.python.org/3/",
        },
        {
            text: "Javascript",
            link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        },
        {
            text: "React",
            link: "https://react.dev/"
        },
        {
            text: "Tailwind",
            link: "https://tailwindcss.com/"
        },
        {
            text: "Tanstack Query",
            link: "https://tanstack.com/query/latest/docs/framework/react/overview"
        },
        {
            text: "Framer Motion",
            link: "https://framermotion.framer.website/"
        },
        {
            text: "Flask",
            link: "https://flask.palletsprojects.com/en/stable/"
        },
        {
            text: "Express",
            link: "https://expressjs.com/"
        },
        {
            text: "MongoDB",
            link: "https://www.mongodb.com/"
        },
        {
            text: "AWS DynamoDB",
            link: "https://aws.amazon.com/dynamodb/"
        },
        {
            text: "Postgres",
            link: "https://www.postgresql.org/"
        },
        {
            text: "Linode",
            link: "https://www.linode.com/"
        },
        {
            text: "AWS",
            link: "https://aws.amazon.com/"
        },
        {
            text: "PythonAnywhere",
            link: "https://www.pythonanywhere.com/"
        },
        {
            text: "Git",
            link: "https://docs.github.com/en"
        },
        {
            text: "Figma",
            link: "https://www.figma.com/"
        }

    ]


    return (
        <section className='flex flex-col gap-4 text-[#333333]'>
            <h2 className='font-bold text-4xl'>Technologies</h2>

            <div className="flex flex-wrap gap-4">
                {technologies.map((tech, i) => (
                    <a key={i}
                        className="flex items-center justify-center px-8 py-2 border border-black bg-transparent text-black
                        dark:border-gray-600 relative group transition duration-200 cursor-pointer active:scale-[0.95] min-w-fit"
                        target="_blank" href={tech.link}
                        aria-label={tech.text}
                    >
                        <div className="absolute -bottom-2 -right-2 bg-gray-300 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
                        <span className="relative">
                        </span>
                        {tech.text}
                    </a>
                ))}
            </div>
        </section>
    )
}

export default Tech