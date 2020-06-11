let divs = document.querySelectorAll('div')
let link = document.querySelector('a')
for (let i = 0; i < divs.length; i++) { // добовляем цикл
    divs[i].addEventListener('click', function (event) { // к каждому элементу добовляем события
        // на клик и выводим его в консоль
        event.stopPropagation()
        console.log(this.getAttribute('id'))//
    }, true)
}

link.addEventListener('click',hadleLinkClick)

function hadleLinkClick (event){
    event.preventDefault()

    let div = divs[0]
    div.style.display = div.style.display === 'none'
        ? 'flex'
        : 'none'
}
