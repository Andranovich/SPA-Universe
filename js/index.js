import { Router } from './router.js'

const router = new Router()
router.add('/', './PAGES/home.html')
router.add('/universe', './PAGES/universe.html')
router.add('/exploration', './PAGES/exploration.html')
router.add(404, './PAGES/404.html')

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()
    
const btHome = document.querySelector('.homeLink')
const btUniverse = document.querySelector('.universeLink')
const btExploration = document.querySelector('.explorationLink')
const bgBody = document.querySelector('body')

btHome.classList.add('active')

btHome.addEventListener('click', () => {
    btHome.classList.add('active')
    btUniverse.classList.remove('active')
    btExploration.classList.remove('active')
    bgBody.classList.add('bgHome')
    bgBody.classList.remove('bgUniverse')
    bgBody.classList.remove('bgExploration')
    
})

btUniverse.addEventListener('click', () => {
    btHome.classList.remove('active')
    btUniverse.classList.add('active')
    btExploration.classList.remove('active')
    bgBody.classList.remove('bgHome')
    bgBody.classList.add('bgUniverse')
    bgBody.classList.remove('bgExploration')

})

btExploration.addEventListener('click', () => {
    btHome.classList.remove('active')
    btUniverse.classList.remove('active')
    btExploration.classList.add('active')
    bgBody.classList.remove('bgHome')
    bgBody.classList.remove('bgUniverse')
    bgBody.classList.add('bgExploration')
})

