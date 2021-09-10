import { useState } from 'react';
// import styles from '../assets/style/slider.module.css'
import '../assets/style/slider.css';

export default function CardSlider() {
  const [cards, setcards] = useState([1,2,3,4])
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
    update(e.target);
  }
  return (
    <div className="carousel">
      <ul className="carousel__list">
        {
          cards.map((item, idx) => (
            <li className={`carousel__item dollar_card`} data-pos={idx+1} onClick={handleClick}>{idx + 1}</li>
          ))
        }
      </ul>
    </div>
  )
}
