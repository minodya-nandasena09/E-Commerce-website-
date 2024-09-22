import "./Colors.css";
import Inputs from "../../components/Inputs";

function Colors({ handleChange }) {
  return (
    <>
      <div class="ml">
        <h2 class="sidebar-title price-title">Colors</h2>

        {/* ---------------------------- */}
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test3" />
          <span className="checkmark all"></span>All
        </label>

        <Inputs
          handleChange={handleChange}
          value="black"
          title="Black"
          name="test3"
          color="black"
        />

        <Inputs
          handleChange={handleChange}
          value="blue"
          title="Blue"
          name="test3"
          color="blue"
        />

        <Inputs
          handleChange={handleChange}
          value="Gray"
          title="White/Gray"
          name="test3"
          color="gray"
        />

        <Inputs
          handleChange={handleChange}
          value="green"
          title="Green"
          name="test3"
          color="green"
        />

        {/* <Inputs
          handleChange={handleChange}
          value="white"
          title="White"
          name="test3"
          color="white"
        />

        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="White"
            name="test3"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label> */}
        {/* ---------------------------- */}
      </div>
    </>
  );
}

export default Colors;
