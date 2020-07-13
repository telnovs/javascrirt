// Создаем  react компакненту
import React from 'react'
import $ from "jquery";

export default class App extends React.Component{
    /*
     данный метод говорит что весь код данного компонента
     находжться уже HTML
     */
    componentDidMount() {
        $('<h1 />')
            // передаем текст в заголовок
            .text('Hello Webpack4')
            // подключим  стили
            .css({
                textAlign: 'center',
                color: 'blue'
            })
            //ставляем текст в хедер
            .appendTo($('header'))
    }

    render () {
        // возвращаем разметку с помощью реакта
        return (
         <React.Fragment>
             <header> </header>

             <hr />

             <div className="box">
                <h2 className="box-title">Box-title</h2>

                <p className="box-text">Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Ab accusamus commodi consectetur culpa
                dolorem earum et ipsam minus, nam quae quod repellendus sequi voluptate?
                Ad autem blanditiis, consequatur
                cupiditate esse incidunt minus pariatur perspiciatis placeat quibusdam
                quidem, saepe vitae voluptas?
                </p>
             </div>
        </React.Fragment>
        )
    }
}