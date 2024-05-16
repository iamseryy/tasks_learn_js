const LOCAL_STORAGE_KEY = 'images'


function getIds() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
}

function saveIds(ids) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(ids))
}


export {
    getIds,
    saveIds
}