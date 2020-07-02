import { Component } from '../core/component'
import {apiService} from '../services/api.service'
import {TransformService} from '../services/Transform.service.js'

export class PostsComponent extends Component {
  constructor(id,{loader}) {
    super(id)
    this.loader = loader
  }
  async onShow(){
    //показываем загрузку
    this.loader.show()
    const fbdata = await apiService.fetchPosts()
    // для вывода обьетка с сервеса
    const posts = TransformService.fbObjectToArray(fbdata)
    //для вывода поста
    const html =posts.map(post =>renderPost(post))
    // скрываем загрузку после получения постов
    this.loader.hide()
    this.$el.insertAdjacentHTML('afterbegin',html.join(' '))
  }
  //очищаем html  когда уходим с данной компаненты с помощью метода onHide
  onHide() {
   this.$el.innerHTML = ''
  }
}

// создаем метод который будет возвращать html раметку
//на входе он пролучет обьект поста
function renderPost(post){
  // оздаем переменную и проверяем сразу тернарным вырожением
  const tag = post.type === 'news'
      ?  '<li class="tag tag-blue tag-rounded">Новость</li>'
      :  '<li class="tag tag-rounded">Заметка</li>'
  const button = '<button class="button-round button-small button-primary">Сохранить</button>'
  //возвращаем html раметку
  return `
    <div class="panel">
        <div class="panel-head">
          <p class="panel-title">${post.title}/p>
          <ul class="tags">
           ${tag}
          </ul>
        </div>
        <div class="panel-body">
          <p class="multi-line">${post.fulltext}</p>
        </div>
        <div class="panel-footer w-panel-footer">
          <small>${post.data}</small>
          ${button}
        </div>
     </div>
  `
}
