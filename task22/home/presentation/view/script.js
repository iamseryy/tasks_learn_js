import { renderRandomImgSection } from './random-view.js'



const bodyEl = document.querySelector('body')
const mainEl = document.createElement('main')
mainEl.classList.add('main')
mainEl.classList.add('center')
bodyEl.appendChild(mainEl)

await renderRandomImgSection(mainEl)