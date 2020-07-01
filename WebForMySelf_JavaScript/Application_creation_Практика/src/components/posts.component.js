import { Component } from '../core/component'
import {apiService} from '../services/api.service'
import {TransformService} from '../services/Transform.service.js'

export class PostsComponent extends Component {
  constructor(id) {
    super(id)
  }
  async onShow(){
   const fbdata = await apiService.fetchPosts()
    const posts = TransformService.fbObjectToArray(fbdata)
  }
}
