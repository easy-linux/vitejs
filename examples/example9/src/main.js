import '@styles/main.scss'
import MainComponent from '@components/MainComponent'
import image from '@images/background2.jpg'

const component = MainComponent('Another one: ')

document.querySelector('body').appendChild(component)
const img = document.createElement('img')
img.style.width = '100px'
img.style.height = '100px'
img.src = image

document.querySelector('body').appendChild(img)
