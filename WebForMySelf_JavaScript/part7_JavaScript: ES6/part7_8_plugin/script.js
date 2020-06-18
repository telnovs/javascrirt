// создаем класс Dropdown
class Dropdown {
    // конструктор принимает 2 параметра selector  и options
    constructor(selector, options) {
        //определяем приватную переменную
        this.$el = document.querySelector(selector)
        this.items = options.items
        this.$el.querySelector('.dropdown__label').textContent = this.items[0].label
    // создаем собитие для элемента
        this.$el.addEventListener('click', event => {
            if (event.target.classList.contains('dropdown__label')) {
                if (this.$el.classList.contains('open')) {
                    this.close()
                } else {
                    this.open()
                }
                // проверям строчку в списке
            } else if (event.target.tagName.toLowerCase() === 'li') {
                this.select(event.target.dataset.id)
            }
        })
        //создаем выпадающий список
        const itemsHTML = this.items.map(i => {
            return `<li data-id="${i.id}">${i.label}</li>`
            //приволим к строке с помощью join
        }).join(' ')
        //нохим выподающий список  и добовляем в него html
        this.$el.querySelector('.dropdown__menu').insertAdjacentHTML('afterbegin', itemsHTML)
    }
    //создаем метод с папаметром id
    select(id) {
        //находим нужный items с помщью find
        const item = this.items.find(i => i.id === id)
        // меняем текст
        this.$el.querySelector('.dropdown__label').textContent = item.label
        // закравем список
        this.close()
    }

    //Делаем методы open  close
    open(){
        //добовляем класс к селектору , зарание прописынный в стилях CSS
        this.$el.classList.add('open')
    }

    close(){
        this.$el.classList.remove('open')
    }
}

const dropdown = new Dropdown('#dropdown', {
    items: [
        {label: 'Москва', id: 'msk'},
        {label: 'Санкт-Петербург', id: 'spb'},
        {label: 'Новосибирск', id: 'nsk'},
        {label: 'Краснодар', id: 'krdr'}
    ]
})