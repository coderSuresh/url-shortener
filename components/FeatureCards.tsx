const FeatureCards = () => {
    return (
        <div className="features flex md:flex-row flex-col justify-center md:items-start items-center mt-20 mb-10 pb-10">
            <div className="feature_card lg:px-8 md:px-4 px-8 w-[300px] bg-white rounded-md md:text-xl md:text-start text-center font-bold text-lg">
                <div className="feature_card_icon bg-dark-violet w-16 p-4 md:mx-0 mx-auto rounded-full -mt-8">
                    <img src="/images/icon-brand-recognition.svg" alt="brand recognition icon" aria-hidden="true" role='presentation' />
                </div>
                <h3 className='my-4 text-lg'>Brand Recognition</h3>
                <p className="text-grayish-violet text-sm font-light pb-8">
                    Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.
                </p>
            </div>

            <div className="line w-6 h-[6px] bg-primary md:mt-32 md:rotate-0 rotate-90 mt-[10px]" />

            <div className="feature_card lg:px-8 md:px-4 px-8 w-[300px] bg-white rounded-md md:text-xl md:text-start text-center font-bold text-lg mt-[42px]">
                <div className="feature_card_icon bg-dark-violet w-16 p-4 md:mx-0 mx-auto rounded-full -mt-8">
                    <img src="/images/icon-detailed-records.svg" alt="brand recognition icon" aria-hidden="true" role='presentation' />
                </div>
                <h3 className='my-4 text-lg'>Detailed Records</h3>
                <p className="text-grayish-violet text-sm font-light pb-8">
                    Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
                </p>
            </div>

            <div className="line w-6 h-[6px] bg-primary md:mt-32 md:rotate-0 rotate-90 mt-[10px]" />

            <div className="feature_card lg:px-8 md:px-4 px-8 w-[300px] bg-white rounded-md md:text-start text-center font-bold md:mt-24 mt-[42px]">
                <div className="feature_card_icon bg-dark-violet w-16 p-4 md:mx-0 mx-auto rounded-full -mt-8">
                    <img src="/images/icon-fully-customizable.svg" alt="brand recognition icon" aria-hidden="true" role='presentation' />
                </div>
                <h3 className='my-4 text-lg'>Fully Customizable</h3>
                <p className="text-grayish-violet text-sm font-light pb-8">
                    Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.
                </p>
            </div>

        </div>
    )
}

export default FeatureCards