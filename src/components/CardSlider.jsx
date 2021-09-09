import { useState } from 'react';
// import styles from '../assets/style/slider.module.css'
import '../assets/style/slider.css';

export default function CardSlider() {
  const [cards, setcards] = useState([1,2,3,4,5])

  // carouselList.addEventListener("click", function (event) {
  //   var newActive = event.target;
  //   var isItem = newActive.closest(".carousel__item");

  //   if (!isItem || newActive.classList.contains("carousel__item_active")) {
  //     return;
  //   }

  //   update(newActive);
  // });

  const update = function (newActive) {
  const carouselItems = document.querySelectorAll(".carousel__item");
  const elems = Array.from(carouselItems);

    const newActivePos = Number(newActive.dataset.pos);

    console.log(newActive, elems.filter(item => item !== newActive))
    elems.forEach((item) => {

      var itemPos = Number(item.dataset.pos);
      if(itemPos < newActivePos){
        if(itemPos === 1){
          item.dataset.pos =  elems.length

        }else {
          item.dataset.pos =  itemPos - Math.abs(itemPos - newActivePos)
        }

      }else if(itemPos > newActivePos){
        console.log(newActivePos, itemPos)
        item.dataset.pos = itemPos - 1
      }else {
        item.dataset.pos = 1

      }

    });
  console.log(elems)

  };

  const getPos = function (current, active) {
    const diff = current - active;

    if (Math.abs(current - active) > 2) {
      return -current;
    }

    return diff;
  };

  const handleClick = (e) => {
    update(e.target);
  }
  return (
    <div className="carousel">
      <ul className="carousel__list">
        <li className="carousel__item" data-pos="1" onClick={handleClick}>1</li>
        <li className="carousel__item" data-pos="2" onClick={handleClick}>2</li>
        <li className="carousel__item" data-pos="3" onClick={handleClick}>3</li>
        <li className="carousel__item" data-pos="4" onClick={handleClick}>4</li>
        {/* <li className={styles.carousel__item} data-pos="5">5</li> */}
      </ul>
    </div>
  )
}
