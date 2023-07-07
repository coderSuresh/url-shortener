import Image from 'next/image'

const Hero = () => {
    return (
        <section className="hero flex md:flex-row md:text-left text-center flex-col-reverse justify-between items-center lg:px-32 md:px-16 px-5 mt-8">
            <div className="hero-left lg:w-1/2 md:w-2/3 w-full">
                <h1
                    className="hero-title text-very-dark-blue font-bold xl:text-7xl lg:text-6xl text-4xl"
                    style={{ lineHeight: 1.2 }}
                >
                    More than just shorter links
                </h1>
                <p className="hero-description md:max-w-[90%] mt-1 lg:mb-10 mb-5 text-grayish-violet">
                    Build your brand's recognition and get detailed insights on how your links are performing.
                </p>
                <button className="bg-primary hover:opacity-60 text-white font-bold text-sm px-6 py-3 rounded-full hover:bg-opacity-80">
                    Get Started
                </button>
            </div>
            <div className="hero-right lg:w-1/2 md:w-11/12 w-full 2xl:static md:relative md:-right-32 mb-10">
                <Image className='w-full' src="/images/illustration-working.svg" alt="working illustration" aria-hidden="true" role='presentation' width={500} height={500} />
            </div>
        </section>
    )
}

export default Hero