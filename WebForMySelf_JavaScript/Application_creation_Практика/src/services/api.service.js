 //создаем сервис который будет работать с асинхронами запросами
 class ApiService{
    constructor(baseUrl){
        this.url =baseUrl
    }
    //метод для создание нового синхроного метода для создание поста
   async creatPost(post){
        try {
            // создаем переменую с присвоением Интерфейса Request из Fetch API является запросом ресурсов или данных.
            const  request = new Request(this.url + '/posts.json',{
                method : 'post',
                body : JSON.stringify('post')
            })
            //оброщаемся к сервесу с помощью метода fetch
          const response =  await   fetch(request)
          return await response.json()
        }catch(error){
            console.log(error)
        }
        }

 }


 export const apiService = new ApiService('https://webformyself-javascript.firebaseio.com')