import React from "react";
import  './App.css';
import onepic from './img/onepic.jpg';
import twopic from './img/twopic.jpg';
import threepic from './img/threepic.jpeg'
import fourpic from './img/fourpic.jpg'
import fivepic from './img/fivepic.jpg'
import sixpic from './img/sixpic.jpg'

const picture = [
    {
        id: 'one',
        img: onepic,
        name: 'Оби-Ван Кеноби'
    },
    {
        id: 'two',
        img: twopic,
        name: 'С-3РО'
    },
    {
        id: 'three',
        img: threepic,
        name: 'R2-D2'
    },
    {
        id: 'four',
        img: fourpic,
        name: 'Тітка Беру'
    },
    {
        id: 'five',
        img: fivepic,
        name: 'Лея Орґана'
    },
    {
        id: 'six',
        img: sixpic,
        name: 'Оуен Ларс'
    },

];

function App() {

    const result = picture.map((item) => {
        return <p key={item.id}>
            <img src={item.img} alt=''/>
            {item.name}
        </p>
    });

    return <div>
    {/*<div className="gallery-grid">*/}
    {/*        <div className="grid-item">*/}
    {/*            <div className="grid-item-inner">*/}
                    {result}

    {/*            </div>*/}
    {/*        </div>*/}
    {/*    </div>*/}
    </div>
}

export default App;


