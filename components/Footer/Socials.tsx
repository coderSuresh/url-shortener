import Link from 'next/link'

const Socials = () => {
    return (
        <div className='flex flex-col gap-y-5'>
            <div className='flex gap-x-5'>
                <Link href='#' className='hover:text-primary' aria-label='facebook'>
                    <i className="fab fa-facebook-square text-2xl"></i>
                </Link>
                <Link href='#' className='hover:text-primary' aria-label='twitter'>
                    <i className="fab fa-twitter text-2xl"></i>
                </Link>
                <Link href='#' className='hover:text-primary' aria-label='pinterest'>
                    <i className="fab fa-pinterest text-2xl"></i>
                </Link>
                <Link href='#' className='hover:text-primary' aria-label='instagram'>
                    <i className="fab fa-instagram text-2xl"></i>
                </Link>
            </div>
        </div>
    )
}

export default Socials