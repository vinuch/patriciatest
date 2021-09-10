import { useState } from 'react';
// import styles from '../assets/style/slider.module.css'
import '../assets/style/slider.css';
import NairaCard from './NairaCard';
import DollarCard from './DollarCard';

export default function CardSlider() {
  const [cards, setcards] = useState([{type: 'dollar'},{type: 'naira'},{type: 'dollar'},{type: 'naira'}])
  const update = function (newActive) {
  const carouselItems = document.querySelectorAll(".carousel__item");
  const elems = Array.from(carouselItems);

    const newActivePos = Number(newActive.dataset.pos);

    if(newActivePos === 1){
      return;
    }

    let diff =  Math.abs(newActivePos - 1)
   
    elems.forEach(item => {
      console.log(diff)
      let itemPos = Number(item.dataset.pos)
      if((itemPos - diff) < 1){
        item.dataset.pos = elems.length - Math.abs(itemPos - diff)
      }else {
        item.dataset.pos = itemPos - diff
      }

    })

  };

  const handleClick = (e) => {
    update(e.target.closest('.carousel__item'));
  }
  return (
    <div className="carousel">
      <ul className="carousel__list">
        {
          cards.map((item, idx) => (
            <li className={`carousel__item dollar_card overflow-hidden`} data-pos={idx+1} onClick={handleClick}>
              {
                item.type === 'dollar'? (
                  <DollarCard />
                ): (
                  <NairaCard />
                )
              }
            </li>
          ))
        }
      </ul>
    </div>
  )
}
