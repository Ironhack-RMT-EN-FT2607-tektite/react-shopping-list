import { useState } from "react";

import AddForm from "../components/AddForm";
import ProductList from "../components/ProductList";
import SearchBar from "../components/SearchBar";

//* this data is just for testing the initial rendering of data
import testProducts from "../data/testProducts.json";

function ShoppingPage() {

  const [ allProducts, setAllProducts ] = useState(testProducts) 
  //* initial state. change to empty array when finished with add functionality
  const [ query, setQuery ] = useState("")

  const [ isFormShowing, setIsFormShowing ] = useState(false)

  // const addProduct = (newProduct) => {
  //   setAllProducts([...allProducts, newProduct])
  // }

  return (
    <>

      <h1>Shopping List!</h1>

      <button onClick={() => setIsFormShowing(!isFormShowing)}>Toggle Add Form</button>

      {/* { isFormShowing ? <AddForm addProduct={addProduct}/> : null } */}
      {/* { isFormShowing ? <AddForm allProducts={allProducts} setAllProducts={setAllProducts}/> : null } */}
      { isFormShowing ? <AddForm setAllProducts={setAllProducts}/> : null }

      <SearchBar query={query} setQuery={setQuery}/>

      {/* //* all elements of the shopping list will be here */}
      <ProductList allProducts={allProducts} query={query} setAllProducts={setAllProducts}/>

    </>
  )
}

export default ShoppingPage 