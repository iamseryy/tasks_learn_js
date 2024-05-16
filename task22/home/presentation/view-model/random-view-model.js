import {
    getRandomPhotoUseCase,
    likeUseCase
} from '../../domain/use-case/photo-usecase.js'


async function getRandomPhoto() {
    return await getRandomPhotoUseCase()
}

function onLike(photo) {
    return likeUseCase(photo)
}


export {
    getRandomPhoto,
    onLike
}