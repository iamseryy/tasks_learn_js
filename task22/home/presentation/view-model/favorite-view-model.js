import {
    findAllFavoritePhotosUseCase,
    deleteFavoritePhotoUseCase
} from '../../domain/use-case/photo-usecase.js'


async function findAllFavoritePhotos() {
    return await findAllFavoritePhotosUseCase()
}

function deleteFavoritePhoto(id) {
    deleteFavoritePhotoUseCase(id)
}


export {
    findAllFavoritePhotos,
    deleteFavoritePhoto
}