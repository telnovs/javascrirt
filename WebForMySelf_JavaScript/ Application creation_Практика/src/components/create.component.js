import { Component } from '../core/component'
import  {Form} from '../core/form'

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
      //  в массиве мфы укажем валидаторы которые необходими применить к текущим контролам
      title :[],
      fulltext : []
    })
  }
}
  // оздаем функию
  function submitHandler(event){
    // отменяем дефотное поведение
    event.preventDefault()
    // получаем значение формы
    const formData = {
      type : this.$el.type.value,
      ///делаем спред оператор
          ...this.from.value()
    }
  }