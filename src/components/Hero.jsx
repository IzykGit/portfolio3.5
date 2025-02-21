import selfimage from '../assets/1739063194048.jpeg'


const Hero = () => {
    return (
        <section className='flex items-center justify-between text-[#333333]'>
            <div className="flex flex-col gap-4 text-shadow-3d-shadow">
                <h1 className="font-bold text-7xl">Lance Hemphill</h1>
                <p className="text-xl font-light">Software Engineer based in Columbus, OH</p>
            </div>

            <div>
                <img src={selfimage} alt="Lance Hemphill" className="rounded-full w-46" />
            </div>
        </section>
    )
}

export default Hero