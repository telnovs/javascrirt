//создаем новый промис 
// принимает мили секнды
const delay = ms =>{
	// возвращает промис в конструктор которого передаем функцию  resolve
	// далее в setTimeout задаем зареджку
	return new Promise (resolve => setTimeout( ()  => resolve(),ms))
}

//скопировали адрес на JSONPlaceholder в строке Example
const url = 'https://jsonplaceholder.typicode.com/todos'

// создаем фунцию 
function fetchTodos() {
	console.log('Fetch todo started...')
	// создаем искуственную задержку 
	return delay(2000)
		.then( () => {
		// делаем запрос на сервер 
	return	fetch(url)
		// парсим респонс
	}).then(response => response.json())

}

// вызываем метод fetchTodos
fetchTodos() 
	.then(data => {
		console.log('Data :',data)
	})
// обрабатываем ошибку методоm catch
	.catch(e => console.error(e))
