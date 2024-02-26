'use server'

const shorten = async (inputValue) => {
    const apiURL = `https://api.tinyurl.com/create?api_token=${process.env.API}`

    const response = {
        success: false,
        data: null,
        error: null
    }

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url: inputValue })
    }

    const result = await fetch(apiURL, requestOptions)
    const data = await result.json()

    if (result.ok) {
        response.success = true
        response.data = data
    }
    else {
        response.error = data
    }

    return response
}

export { shorten }