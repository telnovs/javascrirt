// создаем новый обьект через Object.create  
// метод create принимает 2 параметра и оба из них являются обьектами 
// первый обьект являеться прототипом для данного обьекта 
// во втором мы можем указать определенные поля для даного обьекта 

const person = Object.create ({

	calculateAge(){
		console.log('Age:',new Data().getFullYear()- this.birdYear
	 	)}
	
}, {
	 name: { // поле тут являеться обьектом  
	 	value: 'Mark',  // ключ создаестья  через value
	 	// что бы видно было поле name в цикле for нужен параметр enumerable, по умолчанию он идет как folse.
	 	// необходимо его сдеалть как true
	 	enumerable: true ,
	 	// writable  говорит что нельзя заменять поля, по умолчанию в значении false
	 	writable: true,
	 	// configurable  данный параметр говорит что мы можем удалять какой либо ключ из обьетка, по умолчанию false
	 	// удаляться с помощью оператора  delete  
	 	configurable : true 
	 },
	 birdYear: {
	 	value: 1986  ,
	 	enumerable: false,
	 	writable:false ,
	 	configurable : true 
	 },
	 age: {
	 	get(){ // в get  должны вернуть новое значение  
	 		return new Data().getFullYear()- this.birdYear
	 	},
	 	set(value){
	 		document.body.style.background = 'blue '
	 		console.log('Set age', value )

	 	}
	 }
	 
})  

// person.name = "Blad"

for (let key in person){
	//добовляем проверку если у обькта person
	if (person.hasOwnProperty(key)){
		console.log('key:', key , person[key])// что бы получить значения ключа необходимо написать person[key] 
	}
}	
