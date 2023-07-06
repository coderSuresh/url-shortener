import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <header className='px-10 py-4'>
            <nav className='flex justify-between'>
                <div className="logo--side flex items-center">
                    <Link href="/">
                        <Image src="/images/logo.svg" width="100" height="30" alt='logo' />
                    </Link>

                    <ul className="ml-10 flex gap-5">
                        <li>
                            <Link href="/features">
                                <p className="text-grayish-violet font-bold text-sm hover:text-very-dark-violet">Features</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/pricing">
                                <p className="text-grayish-violet font-bold text-sm hover:text-very-dark-violet">Pricing</p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/resources">
                                <p className="text-grayish-violet font-bold text-sm hover:text-very-dark-violet">Resources</p>
                            </Link>
                        </li>
                    </ul>
                </div>

                <ul className='flex items-center gap-5'>
                    <li>
                        <Link href="/login">
                            <p className="text-grayish-violet font-bold text-sm hover:text-very-dark-violet">Login</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/signup">
                            <button
                                className="bg-primary hover:opacity-60 text-white font-bold text-sm px-4 py-2 rounded-full hover:bg-opacity-80">
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