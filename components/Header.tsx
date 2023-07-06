"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    return (
        <header className='lg:px-32 md:px-16 py-10 px-5 flex relative justify-start items-center'>
            <Link href="/">
                <Image src="/images/logo.svg" width="100" height="30" alt='logo' />
            </Link>

            <button className='sm:hidden absolute right-5' onClick={() => setIsMenuOpen(prevState => !prevState)}>
                <i className={`fas fa-${isMenuOpen ? 'times' : 'bars'} text-very-dark-violet text-2xl`}></i>
            </button>

            <nav className={`
                ${isMenuOpen ? 'flex' : 'hidden'}
                sm:flex sm:flex-row 
                sm:text-left text-center
                sm:w-fit w-[calc(100%-40px)]
                flex-col fixed sm:static
                top-20 items-center
                justify-between
                sm:bg-transparent bg-dark-violet
                sm:p-0 p-5
                rounded-lg
            `}>

                <ul className="sm:ml-10 flex sm:flex-row flex-col sm:gap-5 gap-3">
                    <li>
                        <Link href="/features">
                            <p className="sm:text-grayish-violet text-white font-bold text-sm sm:hover:text-very-dark-violet">Features</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/pricing">
                            <p className="sm:text-grayish-violet text-white font-bold text-sm sm:hover:text-very-dark-violet">Pricing</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/resources">
                            <p className="sm:text-grayish-violet text-white font-bold text-sm sm:hover:text-very-dark-violet">Resources</p>
                        </Link>
                    </li>
                </ul>

                <div className="sm:hidden block divider h-[1px] w-full my-3 bg-grayish-violet" />

                <ul className='flex sm:w-fit w-full items-center sm:flex-row flex-col sm:gap-5 gap-3 sm:absolute lg:right-32 md:right-16 right-5'>
                    <li>
                        <Link href="/login">
                            <p className="sm:text-grayish-violet text-white font-bold text-sm sm:hover:text-very-dark-violet">Login</p>
                        </Link>
                    </li>
                    <li className='w-full'>
                        <Link href="/signup">
                            <button
                                className="bg-primary w-full hover:opacity-60 text-white font-bold text-sm px-4 py-2 rounded-full hover:bg-opacity-80">
                                Sign Up
                            </button>
                        </Link>
                    </li>
                </ul>

            </nav>
        </header>
    )
}

export default Header