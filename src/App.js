import { FaBeer } from "react-icons/fa";
import Navigation from "./Navigation/Nav";
import Products from "./Products/Products";
import Reccommended from "./Reccommended/Reccommended";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
import "./index.css";

// Database
import products from "./db/data";
// import Category from "./Sidebar/Category/Category";
import Card from "./components/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // ---------Input Filter -----------------------------

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );

  // ----------Radio Filter-------------------------------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ----------Buttons Filter-------------------------------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  // -----------Filtered Data------------------------------
  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    //Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        (products) =>
          products.category === selected ||
          products.color === selected ||
          products.company === selected ||
          products.newPrice === selected ||
          products.title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);
  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Reccommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );
}

export default App;
