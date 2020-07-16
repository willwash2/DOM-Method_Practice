let mainElement = document.querySelector('main')

let imgElement = document.createElement('img')

imgElement.src = 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fih0.redbubble.net%2Fimage.620925948.9842%2Fflat%2C550x550%2C075%2Cf.u6.jpg&f=1&nofb=1'

mainElement.append(imgElement)

let buttonElement = document.createElement('button')

buttonElement.append('remove')

document.body.append(buttonElement)

let linkElement = document.createElement('link')

linkElement.append('Google')

linkElement.href = 'https://www.google.com'

mainElement.append(linkElement)

buttonElement.addEventListener('click', function () {
    mainElement.remove()
})
