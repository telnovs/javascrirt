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
    //данныый метод возвращаяет булеан значение
    isValid(){
        let isFormValid = true

        Object.keys(this.controls).forEach(control =>{
            //получаем список валидаторов
            const validators = this.controls[control]
            // непосредственно для конртетного валидатора
           let isValid = true
            // пробегаемся по массиву где каждая функцией валидатором
            validators.forEach(validator=>{
                //проверяем валидны ли текущий control
                isValid = validator(this.form[control]) && isValid

            })
        })

        return isFormValid
    }
}