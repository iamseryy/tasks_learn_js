const API_KEY = 'YOUR API'


async function getPhotoByIdApi(id) {
    try {
        const response = await fetch(
            `https://api.unsplash.com/photos/${id}`,
            {
                headers: { Authorization: 'Client-ID ' + API_KEY }
            }
        )

        if (!response.ok) {
            throw new Error(response.statusText)
        }

        return await response.json()
    } catch (error) {
        throw new Error('api error')
    }

}

async function getRandomPhotoApi() {
    try {
        const response = await fetch(
            'https://api.unsplash.com/photos/random',
            {
                headers: { Authorization: 'Client-ID ' + API_KEY }
            }
        )

        if (!response.ok) {
            throw new Error(response.statusText)
        }

        return await response.json()
    } catch (error) {
        throw new Error('api error')
    }

}

export {
    getPhotoByIdApi,
    getRandomPhotoApi
}