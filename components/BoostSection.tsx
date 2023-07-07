import BtnGetStarted from "./BtnGetStarted"

const BoostSection = () => {
    return (
        <section className="boost lg:px-32 md:px-16 px-5 bg-dark-violet md:bg-bg-boost-desktop bg-bg-boost-mobile text-white py-10 text-center">
            <h2 className='font-bold md:text-4xl text-3xl mb-4'>Boost your links today</h2>

            <BtnGetStarted />

        </section>
    )
}

export default BoostSection