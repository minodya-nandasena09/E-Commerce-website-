import Category from "./Category/Category";
import Colors from "./Colors/Colors";
import Price from "./Price/Price";
import "./Sidebar.css";
import { FaCartArrowDown } from "react-icons/fa";

function Sidebar({ handleChange }) {
  // console.log(handleChange);
  return (
    <>
      <section class="sidebar">
        <div class="logo-container">
          <h1>
            <FaCartArrowDown />
          </h1>
        </div>

        <Category handleChange={handleChange} />
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
}
export default Sidebar;
