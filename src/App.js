import React from "react";
import './App.css';
import onepic from './img/onepic.jpg';
import twopic from './img/twopic.jpg';
import threepic from './img/threepic.jpeg'
import fourpic from './img/fourpic.jpg'
import fivepic from './img/fivepic.jpg'
import sixpic from './img/sixpic.jpg'


function App() {
  return (
      <div>
        <div className="gallery-grid">
          <div className="grid-item">
            <div className="grid-item-inner">
              <img src={onepic} alt="картинка" className="grid-item-img"/>
              <div className="grid-item-title">
                <span>Оби-Ван Кеноби</span>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-grid">
          <div className="grid-item">
            <div className="grid-item-inner">
              <img src={twopic} alt="картинка" className="grid-item-img"/>
              <div className="grid-item-title">
                <span>С-3РО</span>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-grid">
          <div className="grid-item">
            <div className="grid-item-inner">
              <img src={threepic} alt="картинка" className="grid-item-img"/>
              <div className="grid-item-title">
                <span>R2-D2</span>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-grid">
          <div className="grid-item">
            <div className="grid-item-inner">
              <img src={fourpic} alt="картинка" className="grid-item-img"/>
              <div className="grid-item-title">
                <span>Тітка Беру</span>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-grid">
          <div className="grid-item">
            <div className="grid-item-inner">
              <img src={fivepic} alt="картинка" className="grid-item-img"/>
              <div className="grid-item-title">
                <span>Лея Орґана</span>
              </div>
            </div>
          </div>
        </div>
        <div className="gallery-grid">
          <div className="grid-item">
            <div className="grid-item-inner">
              <img src={sixpic} alt="картинка" className="grid-item-img"/>
              <div className="grid-item-title">
                <span>Оуен Ларс</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
