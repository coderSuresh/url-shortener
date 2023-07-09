"use client"
import React, { useState, useEffect } from 'react'
import ShortenLink from "@/components/ShortenLink"

const Shorten = () => {
    const [hasError, setHasError] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [shortenedLinks, setShortenedLinks] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (inputValue === '') setHasError(true)
        else {
            setHasError(false)
            shortenLink()
        }
    }

    const shortenLink = () => {
        setIsLoading(true)
        const apiURL = `https://api.shrtco.de/v2/shorten?url=${inputValue}`
        fetch(apiURL)
            .then(res => res.json())
            .then(data => {
                if (data.ok) {
                    saveShortenedLink(data.result.short_link)
                    setShortenedLinks(getShortenedLinks())
                } else {
                    setHasError(true)
                }
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
                setIsLoading(false)
            })
    }

    const saveShortenedLink = (shortLink: string) => {
        const shortLinks = getShortenedLinks()
        if (shortLinks) {
            shortLinks.unshift({
                originalLink: inputValue,
                shortenLink: shortLink
            })
            localStorage.setItem('shortened_links', JSON.stringify(shortLinks))
        }
        else {
            localStorage.setItem('shortened_links', JSON.stringify({
                originalLink: inputValue,
                shortenLink: shortLink
            }))
        }
    }

    const getShortenedLinks = () => {
        const shortLinks = localStorage.getItem('shortened_links') ? JSON.parse(localStorage.getItem('shortened_links')!) : []
        if (shortLinks) {
            return shortLinks
        }
    }

    const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
        const inputVal = e.currentTarget.value
        setInputValue(inputVal)
    }

    useEffect(() => {
        if (inputValue !== '') setHasError(false)
    }, [inputValue])

    const renderShortenedLinkElems = () => {
        const shortLinks = getShortenedLinks()
        if (shortLinks) {
            return shortLinks.map((link: any, i: number) => {
                return (
                    <ShortenLink
                        key={i}
                        originalLink={link.originalLink}
                        shortenLink={link.shortenLink}
                    />
                )
            })
        }
    }

    useEffect(() => {
        renderShortenedLinkElems()
    }, [shortenedLinks])

    return (
        <>
            <div className="shortner_section relative lg:px-32 md:px-16 px-5 md:-top-14 md:-mb-10 -top-20 -mb-16">
                <div className="shortner_container rounded-md text-center bg-dark-violet bg-no-repeat md:bg-cover bg-contain bg-right-top w-full md:bg-bg-shorten-desktop bg-bg-shorten-mobile px-10 py-10">
                    <form onSubmit={handleFormSubmit} action="#" className="relative flex flex-wrap gap-x-5 gap-y-3 md:flex-row flex-col">
                        <div className="flex-grow">
                            <input
                                value={inputValue}
                                onInput={handleInputChange}
                                type="text"
                                className={`${hasError ? 'border-2 border-danger placeholder-danger' : ''} px-4 w-full flex-grow py-2 rounded-md`}
                                placeholder="Shorten a link here..."
                            />
                            {hasError && (
                                <p className="text-danger absolute text-sm italic text-start mt-1">
                                    Please add a link
                                </p>
                            )}
                        </div>
                        <button type="submit" className={`whitespace-nowrap px-4 h-fit py-2 rounded-md text-white bg-primary hover:opacity-70 ${hasError ? 'mt-5' : ''}`}>
                            {isLoading ? 'Shortening...' : 'Shorten It!'}
                        </button>
                    </form>
                </div>
            </div>

            {renderShortenedLinkElems()}
        </>
    )
}

export default Shorten