import Link from 'next/link'

type Props = {
    title: string,
    contents: {
        name: string,
        link: string
    }[]
}

const FooterContents = ({ title, ...links }: Props) => {

    const linkElem = links.contents.map((link, index) => {
        return (
            <li key={index}>
                <Link className='hover:text-primary' href={link.link}>
                    {link.name}
                </Link>
            </li>
        )
    })

    return (
        <div>
            <h3 className='font-bold'>{title}</h3>
            <ul className='mt-5 text-gray flex flex-col gap-y-2'>
                {linkElem}
            </ul>
        </div>
    )
}

export default FooterContents