import Hero from '@/components/Hero'
import Features from '@/components/Features'
import BtnGetStarted from '@/components/BtnGetStarted'

const HomePage = () => {
  return (
    <main>

      <Hero />
      <Features />

      <section className="boost lg:px-32 md:px-16 px-5 bg-dark-violet md:bg-bg-boost-desktop bg-bg-boost-mobile text-white py-10 text-center">
        <h2 className='font-bold md:text-4xl text-3xl mb-4'>Boost your links today</h2>

        <BtnGetStarted />

      </section>

    </main>
  )
}

export default HomePage