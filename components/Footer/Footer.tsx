import React from 'react'
import FooterContents from '@/components/Footer/FooterContents'
import Socials from '@/components/Footer/Socials'

const Footer = () => {
    return (
        <footer className='lg:px-32 md:px-16 px-5 py-10 bg-very-dark-violet text-white'>
            <div className='flex md:flex-wrap md:flex-row flex-col gap-10 justify-between md:text-start md:items-start text-center items-center'>
                <h2 className='md:text-4xl text-3xl font-bold'>Shortly</h2>

                <FooterContents
                    title='Features'
                    contents={[
                        {
                            name: 'Link Shortening',
                            link: '#'
                        },
                        {
                            name: 'Branded Links',
                            link: '#'
                        },
                        {
                            name: 'Analytics',
                            link: '#'
                        }
                    ]}
                />

                <FooterContents
                    title='Resources'
                    contents={[
                        {
                            name: 'Blog',
                            link: '#'
                        },
                        {
                            name: 'Developers',
                            link: '#'
                        },
                        {
                            name: 'Support',
                            link: '#'
                        }
                    ]}
                />

                <FooterContents
                    title='Company'
                    contents={[
                        {
                            name: 'About',
                            link: '#'
                        },
                        {
                            name: 'Our Team',
                            link: '#'
                        },
                        {
                            name: 'Careers',
                            link: '#'
                        },
                        {
                            name: 'Contact',
                            link: '#'
                        }
                    ]}
                />

                <Socials />
            </div>

        </footer>
    )
}

export default Footer