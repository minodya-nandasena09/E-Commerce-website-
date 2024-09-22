import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

import "./Nav.css";

function Nav() {
  return (
    <nav>
      <div class="nav-container">
        <input
          
          type="text"
          className="search-input"
          placeholder="Search here.."
        />
      </div>

      <div class="profile-container">
        <a href="#" className="">
          <FiHeart className="nav-icons" />
        </a>

        <a href="" className="">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>

        <a href="" className="">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}
export default Nav;
