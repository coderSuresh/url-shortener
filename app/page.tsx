import Hero from '@/components/Hero'
import Features from '@/components/Features'
import BtnGetStarted from '@/components/BtnGetStarted'

const HomePage = () => {
  return (
    <main>

      <Hero />
      <Features />

      <section className="boost">
        <h2>Boost your links today</h2>

        <BtnGetStarted />

      </section>

    </main>
  )
}

export default HomePage