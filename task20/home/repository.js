const LOCAL_STORAGE_KEY = 'schedule'


if (!localStorage.getItem(LOCAL_STORAGE_KEY)) {
    init()
}

function init() {
    const initialData = [
        {
            "id": 1,
            "name": "Йога",
            "time": "10:00 - 11:00",
            "maxParticipants": 15,
            "currentParticipants": 8
        },
        {
            "id": 2,
            "name": "Пилатес",
            "time": "11:30 - 12:30",
            "maxParticipants": 10,
            "currentParticipants": 5
        },
        {
            "id": 3,
            "name": "Кроссфит",
            "time": "13:00 - 14:00",
            "maxParticipants": 20,
            "currentParticipants": 15
        },
        {
            "id": 4,
            "name": "Танцы",
            "time": "14:30 - 15:30",
            "maxParticipants": 12,
            "currentParticipants": 10
        },
        {
            "id": 5,
            "name": "Бокс",
            "time": "16:00 - 17:00",
            "maxParticipants": 8,
            "currentParticipants": 6
        }
    ]

    initialData.forEach(item => {
        initialData[initialData.indexOf(item)].registered = false
    })

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initialData))
}


function getSchedule() {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
}

function getMaxAmountParticipantsByLessonName(lessonName) {
    return getSchedule().filter(it => it.name === lessonName)[0].maxParticipants
}

function getCurrentAmountParticipantsByLessonName(lessonName) {
    return getSchedule().filter(it => it.name === lessonName)[0].currentParticipants
}

function incrementCurrentAmountParticipantsByLessonName(lessonName) {
    const schedule = getSchedule()
    schedule[schedule.indexOf(schedule.filter(it => it.name === lessonName)[0])].currentParticipants++
    localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(schedule)
    )
}

function decrementCurrentAmountParticipantsByLessonName(lessonName) {
    const schedule = getSchedule()
    schedule[schedule.indexOf(schedule.filter(it => it.name === lessonName)[0])].currentParticipants--
    localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(schedule)
    )
}

function isCurrentParticipantRegistered(lessonName) {
    return getSchedule().filter(it => it.name === lessonName)[0].registered
}

function registerParticipant(lessonName) {
    const schedule = getSchedule()
    schedule[schedule.indexOf(schedule.filter(it => it.name === lessonName)[0])].registered = true
    localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(schedule)
    )
}

function unregisterParticipant(lessonName) {
    const schedule = getSchedule()
    schedule[schedule.indexOf(schedule.filter(it => it.name === lessonName)[0])].registered = false
    localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(schedule)
    )
}

export {
    getSchedule,
    getMaxAmountParticipantsByLessonName,
    getCurrentAmountParticipantsByLessonName,
    incrementCurrentAmountParticipantsByLessonName,
    decrementCurrentAmountParticipantsByLessonName,
    isCurrentParticipantRegistered,
    registerParticipant,
    unregisterParticipant
}