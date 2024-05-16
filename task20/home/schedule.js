import {
    getSchedule,
    getMaxAmountParticipantsByLessonName,
    getCurrentAmountParticipantsByLessonName,
    incrementCurrentAmountParticipantsByLessonName,
    decrementCurrentAmountParticipantsByLessonName,
    isCurrentParticipantRegistered,
    registerParticipant,
    unregisterParticipant
} from './repository.js'

function getScheduleItemHtml(item) {
    return `
          <tr class="schedule-item">
            <td class="lesson-name">${item.name}</td>
            <td>${item.time}</td>
            <td>${item.maxParticipants}</td>
            <td class="current-participants">${item.currentParticipants}</td>
            <td>
                <button class="add-btn" ${item.registered || item.maxParticipants === item.currentParticipants ? 'disabled' : 'enable'}>
                    Записаться
                </button>
                <button class="cancel-btn" 
                        ${(item.maxParticipants === item.currentParticipants && !item.registered ) || (!item.registered) ? 'disabled' : 'enable'}>
                    Отменить запись
                </button>
            </td>
          </tr>
    `
}


const schedule = getSchedule()
const scheduleBodyEl = document.querySelector('.schedule-body');

schedule.forEach(it => {

})

scheduleBodyEl.addEventListener('click', ({ target }) => {
    const scheduleItemEl = target.closest('.schedule-item')
    const lessonNameEl = scheduleItemEl.querySelector('.lesson-name')
    const addBtnEl = scheduleItemEl.querySelector('.add-btn')
    const cancelBtnEl = scheduleItemEl.querySelector('.cancel-btn')
    const currentParticipants = scheduleItemEl.querySelector('.current-participants')
    const maxStudentsAmount = getMaxAmountParticipantsByLessonName(lessonNameEl.textContent)
    const currentStudentsAmount = getCurrentAmountParticipantsByLessonName(lessonNameEl.textContent)

    if (isCurrentParticipantRegistered(lessonNameEl.textContent)) {
        addBtnEl.disabled = true
        cancelBtnEl.disabled = false
    }

    if(maxStudentsAmount - 1 === currentStudentsAmount) {
        addBtnEl.disabled = true
    }

    if (target.closest('.add-btn')) {
        incrementCurrentAmountParticipantsByLessonName(lessonNameEl.textContent)
        currentParticipants.textContent = (Number(currentParticipants.textContent) + 1).toString()
        addBtnEl.disabled = true
        cancelBtnEl.disabled = false
        registerParticipant(lessonNameEl.textContent)
    }

    if (target.closest('.cancel-btn')) {
        decrementCurrentAmountParticipantsByLessonName(lessonNameEl.textContent)
        currentParticipants.textContent = (Number(currentParticipants.textContent) - 1).toString()
        addBtnEl.disabled = false
        cancelBtnEl.disabled = true
        unregisterParticipant(lessonNameEl.textContent)
    }
})


