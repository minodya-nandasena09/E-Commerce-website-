import "./Category.css";
import Inputs from "../../components/Inputs";

function Category({ handleChange }) {
  return (
    <>
      <div className="sidebar-items">
        <h2 className="sidebar-title">Category</h2>

        {/* ---------------------------- */}
        <div>
          <label className="sidebar-label-container">
            <input onChange={handleChange} type="radio" value="" name="test" />
            <span className="checkmark"></span>All
          </label>

          <Inputs
            handleChange={handleChange}
            value="laptop"
            title="Laptops"
            name="test"
          />

          <Inputs
            handleChange={handleChange}
            value="tablet"
            title="Tablets"
            name="test"
          />

          <Inputs
            handleChange={handleChange}
            value="phone"
            title="Mobile Phones"
            name="test"
          />

          {/* <Inputs
            handleChange={handleChange}
            value="heels"
            title="Heels"
            name="test"
          /> */}
        </div>
        {/* ---------------------------- */}
      </div>
    </>
  );
}
export default Category;
