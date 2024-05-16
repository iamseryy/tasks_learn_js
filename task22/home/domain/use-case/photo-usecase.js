import {
    getPhotoById,
    getRandomPhoto
} from '../../data/photo-api-repository.js'

import {
    saveFavoritePhotoId,
    deleteFavoritePhotoId,
    findAllFavoritePhotoIds,
    existsFavoritePhotoById
} from '../../data/localstorage-repository.js'

import Photo from '../entity/photo.js'



async function getPhotoByIdUseCase(id) {
    const photo = await getPhotoById(id)

    if (existsFavoritePhotoById(photo.id)) return new Photo(photo.id, photo.url, photo.author, photo.likeCount + 1)

    return photo
}


async function getRandomPhotoUseCase() {
    const photo = await getRandomPhoto()

    if (existsFavoritePhotoById(photo.id)) return new Photo(photo.id, photo.url, photo.author, photo.likeCount + 1)

    return photo
}

function saveFavoritePhotoUseCase(id) {
    saveFavoritePhotoId(id)
}

function deleteFavoritePhotoUseCase(id) {
    return deleteFavoritePhotoId(id)
}

function likeUseCase(photo) {
    let likeCount = photo.likeCount

    if(existsFavoritePhotoById(photo.id)) {
        deleteFavoritePhotoUseCase(photo.id)
        likeCount--
    } else {
        saveFavoritePhotoUseCase(photo.id)
        likeCount++
        }

    return new Photo(photo.id, photo.url, photo.author, likeCount)
}

async function findAllFavoritePhotosUseCase() {
    return await Promise.all(findAllFavoritePhotoIds().map(async (id) => {
        const photo =  await getPhotoById(id)
        return new Photo(photo.id, photo.url, photo.author, photo.likeCount + 1)
    }))
}

async function findFavoritePhotoByIdUseCase(id) {
    if(!existsFavoritePhotoById(id)) return null

    const photo = await getPhotoById(id)

    return new Photo(photo.id, photo.url, photo.author, photo.likeCount + 1)
}


export {
    getPhotoByIdUseCase,
    getRandomPhotoUseCase,
    saveFavoritePhotoUseCase,
    deleteFavoritePhotoUseCase,
    findFavoritePhotoByIdUseCase,
    findAllFavoritePhotosUseCase,
    likeUseCase
}