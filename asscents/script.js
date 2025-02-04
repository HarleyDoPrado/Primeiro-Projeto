function toggleMode () {
    const html = document.documentElement

    const img = document.querySelector ("#profile img")

    if (html.classList.contains ('light') ) {
        html.classList.remove ('light')
        img.setAttribute ('src', './asscents/avatar.png')
    }
    else {
        html.classList.add ('light')
        img.setAttribute ('src', './asscents/Dahora light.png')
    }

}

// pegar a tag img
// se tiver light mode, adicionar a imagem light
// se tiver a imagem light mode manter a  imagem
//substituir a imagem