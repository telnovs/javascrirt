import { Component } from '../core/component'
import  {Form} from '../core/form'
import {Validators} from '../core/valodators'

export class CreateComponent extends Component {
  constructor(id) {
    super(id)
  }
  //реализуем метод
  //если в html компаненте  есть кнопка с type='submit'то мы можен прослушивать собития submit ,
  // на даанном комапаненте

  init(){
    this.$el.addEventListener('submit',submitHandler.bind(this))
    //создаем новый экземпояр класса с двумя параметрами
    //this.$el отвечает непосредственно за сам блок d html разметки и самим им являеться
    // вторым параметром указываем обьект конфигураций контролов которые соделжаться в формае
    // их надо ьудет еще валидировать
    this.form = new Form(this.$el,{
      //  в массиве мы укажем валидаторы которые необходими применить к текущим контролам
      //делаем проверку с помощью класса Validators ссылаемся на него. а не делаем вызов
      title :[Valodators.required],
      fulltext : [Valodators.required]
    })
  }
}
  // оздаем функию
  function submitHandler(event){
    // отменяем дефотное поведение
    event.preventDefault()
    //делаем проверку
    if(this.form.isValid()){
      // получаем значение формы
      const formData = {
        type : this.$el.type.value,
        ///делаем спред оператор
        ...this.from.value()
      }
    }

  }