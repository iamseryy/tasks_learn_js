import {
    getPhotoByIdApi,
    getRandomPhotoApi
} from './api/unsplash-api.js'

import Photo from '../domain/entity/photo.js'


async function getPhotoById(id){
    const photo = await getPhotoByIdApi(id)
    return new Photo(
        photo.id,
        photo.urls.regular,
        `${photo.user.first_name} ${photo.user.last_name}`,
        photo.likes
    )
}

async function getRandomPhoto(){
    const randomPhoto = await getRandomPhotoApi()
    return new Photo(
        randomPhoto.id,
        randomPhoto.urls.regular,
        `${randomPhoto.user.first_name} ${randomPhoto.user.last_name}`,
        randomPhoto.likes
    )
}

export {
    getPhotoById,
    getRandomPhoto
}