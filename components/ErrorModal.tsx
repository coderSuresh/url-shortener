import React from 'react'

type Props = {
    error: string,
    setError: React.Dispatch<React.SetStateAction<string>>
}

const ErrorModal = ({error, setError} : Props) => {
    return (
        <div className="error_container w-full h-full bg-modal-bg p-10 z-50 fixed top-0">
            <div className='p-10 rounded bg-white w-full max-w-lg mx-auto'>
                <h2 className='text-danger font-bold text-3xl mb-2'>Error!</h2>
                <p className="text-danger">
                    {error}
                </p>
                <button
                    onClick={() => setError('')}
                    className="text-white rounded px-4 py-2 bg-primary font-bold mt-5"
                >
                    Close
                </button>
            </div>
        </div>
    )
}

export default ErrorModal