import {
    getIds,
    saveIds
} from './local/localstorage.js'


function findAllFavoritePhotoIds() {
    return getIds()
}

function existsFavoritePhotoById(id) {
    const ids = getIds()
    return ids ? getIds().includes(id) : false
}

function saveFavoritePhotoId(id) {
    let ids = getIds()
    if (!ids) ids = [id]
    else if (!ids.includes(id)) ids.push(id)

    saveIds(ids)
}

function deleteFavoritePhotoId(id) {
    const ids = getIds()

    if (!ids || !ids.includes(id)) return null

    saveIds(ids.filter(it => it !== id))

    return id
}


export {
    findAllFavoritePhotoIds,
    existsFavoritePhotoById,
    saveFavoritePhotoId,
    deleteFavoritePhotoId
}