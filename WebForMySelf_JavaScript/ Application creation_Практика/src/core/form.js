export class Form {
    //реализуем метод конструктора куда мы передаем 2 параметра
    // и сохраняем их в приватных переменных
    constructor(form,controls){
        this.form = form
        this.controls = controls
    }
    // реализаем метод value, он будет отдавть обьект содержащий все необходимые значения
    value(){
        const value = {}
        //проходимся по обекту и сморим его ключи при помощи обращения к методу Object.keys
        //Object.keys возращает массив ключей и дальше мы проходимся forEach
        Object.keys(this.controls).forEach(control=>{
            value[control] = this.form[control].value
            })
        return value
    }
}