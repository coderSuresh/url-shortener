import Shorten from '@/components/Shorten'
import FeatureCards from '@/components/FeatureCards'

const Features = () => {
    return (
        <section className="feature bg-light-gray mt-28">
            <Shorten />

            <div className="feature-content lg:px-32 md:px-16 px-5">
                <div className="text-center w-full max-w-[500px] mx-auto">
                    <h2 className='md:text-4xl text-3xl font-bold'>Advanced Statistics</h2>
                    <p className="text-grayish-violet mt-2">
                        Track how your links are performing across the web with our advanced statistics dashboard.
                    </p>
                </div>

                <FeatureCards />
            </div>
        </section>
    )
}

export default Features