import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

function Card({ img, title, star, reviews, prevPrice, newPrice }) {
  return (
    <>
      {/* 2-------------------------------------------------------------- */}
      <section class="card">
        <img src={img} alt={title} className="card-img" />

        <div class="card-details">
          <h3 class="card-title">{title}</h3>

          <section class="card-review">
            {star}
            {star}
            {star}
            {star}
            <span class="total-reviews">{reviews}</span>
          </section>

          <section class="card-price">
            <div class="price">
              <del>{prevPrice}</del> {newPrice}
            </div>

            <div class="bag">
              <BsFillBagHeartFill className="bag-icon" />
            </div>
          </section>
        </div>
      </section>
      {/* -------------------------------------------------------------- */}
    </>
  );
}
export default Card;
