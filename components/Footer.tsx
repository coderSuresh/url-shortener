import React from 'react'

const Footer = () => {
    return (
        <footer className='lg:px-32 md:px-16 px-5 py-10 bg-very-dark-violet text-white'>
            <div className='flex md:flex-wrap md:flex-row flex-col gap-10 justify-between md:text-start md:items-start text-center items-center'>
                <h2 className='md:text-4xl text-3xl font-bold'>Shortly</h2>

                <div>
                    <h3 className='font-bold'>Features</h3>
                    <ul className='mt-5 text-gray flex flex-col gap-y-2'>
                        <li>
                            <a href='#' className='hover:text-primary'>Link Shortening</a>
                        </li>
                        <li>
                            <a href='#' className='hover:text-primary'>Branded Links</a>
                        </li>
                        <li>
                            <a href='#' className='hover:text-primary'>Analytics</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className='font-bold'>Resources</h3>
                    <ul className='mt-5 text-gray flex flex-col gap-y-2'>
                        <li>
                            <a href='#' className='hover:text-primary'>Blog</a>
                        </li>
                        <li>
                            <a href='#' className='hover:text-primary'>Developers</a>
                        </li>
                        <li>
                            <a href='#' className='hover:text-primary'>Support</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h3 className='font-bold'>Company</h3>
                    <ul className='mt-5 text-gray flex flex-col gap-y-2'>
                        <li>
                            <a href='#' className='hover:text-primary'>About</a>
                        </li>
                        <li>
                            <a href='#' className='hover:text-primary'>Our Team</a>
                        </li>
                        <li>
                            <a href='#' className='hover:text-primary'>Careers</a>
                        </li>
                        <li>
                            <a href='#' className='hover:text-primary'>Contact</a>
                        </li>
                    </ul>
                </div>

                <div className='flex flex-col gap-y-5'>
                    <div className='flex gap-x-5'>
                        <a href='#' className='hover:text-primary'>
                            <i className="fab fa-facebook-square text-2xl"></i>
                        </a>
                        <a href='#' className='hover:text-primary'>
                            <i className="fab fa-twitter text-2xl"></i>
                        </a>
                        <a href='#' className='hover:text-primary'>
                            <i className="fab fa-pinterest text-2xl"></i>
                        </a>
                        <a href='#' className='hover:text-primary'>
                            <i className="fab fa-instagram text-2xl"></i>
                        </a>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer