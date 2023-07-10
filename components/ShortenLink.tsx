"use client"
import React from 'react'
import Link from 'next/link'

type Props = {
    originalLink: string,
    shortenLink: string,
    getShortenedLinks: () => any,
    setShortenedLinks: React.Dispatch<React.SetStateAction<never[]>>
}

const ShortenLink = ({ originalLink, shortenLink, getShortenedLinks, setShortenedLinks }: Props) => {

    const [isCopied, setIsCopied] = React.useState(false)

    React.useEffect(() => {
        if (isCopied) {
            setTimeout(() => {
                setIsCopied(false)
            }, 5000)
        }
    }, [isCopied])

    const copyToClipboard = () => {
        try {
            navigator.clipboard.writeText(shortenLink)
            setIsCopied(true)
        }
        catch (err) {
            console.log(err)
        }
    }

    const deleteLink = (link: String) => {
        const consent = confirm('Are you sure you want to delete this link?')
        if (consent) {
            const shortenedLinks = getShortenedLinks()
            const newShortenedLinks = shortenedLinks.filter((shortenedLink: any) => shortenedLink.shortenLink !== link)
            localStorage.setItem('shortened_links', JSON.stringify(newShortenedLinks))
            setShortenedLinks(newShortenedLinks)
        }
        else return
    }

    return (
        <div className="shortened_links rounded bg-white mx-5 lg:mx-32 md:mx-16 mb-4">
            <div className="px-4 py-2 flex md:flex-row flex-col md:flex-wrap gap-5 gap-y-2 md:items-center justify-end">
                <p className="link break-words flex-grow">
                    {originalLink}
                </p>
                <div className="divider h-[1px] w-full bg-light-gray md:hidden block" />
                <Link href="#" className="text-primary">{shortenLink}</Link>
                <div className="flex md:gap-2 gap-5">
                    <button
                        onClick={() => copyToClipboard()}
                        className={
                            `rounded 
                            flex-grow 
                        ${isCopied ? 'bg-dark-violet' : 'bg-primary'} 
                        hover:opacity-60 text-white px-4 py-2`
                        }
                    >
                        {isCopied ? 'Copied!' : 'Copy'}
                    </button>
                    <button onClick={() => deleteLink(shortenLink)} >
                        <i className="fas fa-trash text-primary" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ShortenLink