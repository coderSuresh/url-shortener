import InnerContentOfFeatureCards from "./InnerContentOfFeatureCards"

const FeatureCards = () => {
    return (
        <div className="features flex md:flex-row flex-col justify-center md:items-start items-center mt-20 mb-10 pb-10">
            <div className="feature_card lg:px-8 md:px-4 px-8 w-[300px] bg-white rounded-md md:text-xl md:text-start text-center font-bold text-lg">
                <InnerContentOfFeatureCards
                    img='icon-brand-recognition.svg'
                    title='Brand Recognition'
                    desc='Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.'
                />
            </div>

            <div className="line w-6 h-[6px] bg-primary md:mt-32 md:rotate-0 rotate-90 mt-[10px]" />

            <div className="feature_card lg:px-8 md:px-4 px-8 w-[300px] bg-white rounded-md md:text-xl md:text-start text-center font-bold text-lg mt-[42px]">
                <InnerContentOfFeatureCards
                    img='icon-detailed-records.svg'
                    title='Detailed Records'
                    desc='Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.'
                />
            </div>

            <div className="line w-6 h-[6px] bg-primary md:mt-32 md:rotate-0 rotate-90 mt-[10px]" />

            <div className="feature_card lg:px-8 md:px-4 px-8 w-[300px] bg-white rounded-md md:text-start text-center font-bold md:mt-24 mt-[42px]">
                <InnerContentOfFeatureCards
                    img='icon-fully-customizable.svg'
                    title='Fully Customizable'
                    desc='Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.'
                />
            </div>

        </div>
    )
}

export default FeatureCards