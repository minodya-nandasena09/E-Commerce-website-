import "./Reccommended.css";
import Buttons from "../components/Buttons";

function Reccommended({ handleClick }) {
  return (
    <>
      <div>
        <h2 className="reccommended-title">Recommended</h2>
        <div className="reccommended-flex">
          <button onClick={handleClick} className="btns" title="All Products">
            All Products
          </button>

          <Buttons onClickHandler={handleClick} value="Apple" title="Apple" />
          <Buttons onClickHandler={handleClick} value="Samsung" title="Samsung" />
          <Buttons onClickHandler={handleClick} value="Asus" title="Asus" />
          {/* <Buttons onClickHandler={handleClick} value="Vans" title="Vans" /> */}
        </div>
      </div>
    </>
  );
}

export default Reccommended;
