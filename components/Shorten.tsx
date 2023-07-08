"use client"

import ShortenedLink from "@/components/ShortenLink"

const Shorten = () => {

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log('Form Submitted')
    }

    return (
        <>
        <div className="shortner_section relative lg:px-32 md:px-16 px-5 md:-top-10 -top-16">
            <div className="shortner_container rounded-md text-center bg-dark-violet bg-no-repeat md:bg-cover bg-contain bg-right-top w-full md:bg-bg-shorten-desktop bg-bg-shorten-mobile px-8 py-6">
                <form onSubmit={handleFormSubmit} action="#" className="flex flex-wrap gap-x-5 gap-y-3 md:flex-row flex-col">
                    <input type="text" className="px-4 max-w-full flex-grow py-2 rounded-md" placeholder="Shorten a link here..." />
                    <button type="submit" className="whitespace-nowrap px-4 py-2 rounded-md text-white bg-primary hover:opacity-70">
                        Shorten It!
                    </button>
                </form>
            </div>
            </div>

            <ShortenedLink
                originalLink="https://www.google.com"
                shortenLink="https://rel.ink/abc123"
            />
            <ShortenedLink
                originalLink="https://www.google.com"
                shortenLink="https://rel.ink/abc123"
            />
            <ShortenedLink
                originalLink="https://www.google.com"
                shortenLink="https://rel.ink/abc123"
            />
        </>
    )
}

export default Shorten