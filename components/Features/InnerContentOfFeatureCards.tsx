import Image from "next/image"
type Props = {
    img: string,
    title: string,
    desc: string
}

const InnerContentOfFeatureCards = ({ img, title, desc }: Props) => {
    return (
        <>
            <div className="feature_card_icon bg-dark-violet w-16 p-4 md:mx-0 mx-auto rounded-full -mt-8">
                <Image src={`/images/${img}`} width={64} height={64} alt="brand recognition icon" aria-hidden="true" role='presentation' />
            </div>
            <h3 className='my-4 text-lg'>{title}</h3>
            <p className="text-grayish-violet text-sm font-light pb-8">
                {desc}
            </p>
        </>
    )
}

export default InnerContentOfFeatureCards