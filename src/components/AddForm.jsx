import { useState } from "react"

function AddForm(props) {

  const [ nameValue, setNameValue ] = useState("")
  const [ priceValue, setPriceValue ] = useState(0)

  // bonus
  const [errorMessage, setErrorMessage] = useState(null)

  const handleNameChange = (event) => {
    // console.log(event.target.value)
    setNameValue(event.target.value)
  }

  const handlePriceChange = (e) => setPriceValue(e.target.value)

  const handleAddProduct = (e) => {
    e.preventDefault() // remove any default behaviour from the form

    // do the values exist or not?
    if (!priceValue || !nameValue) {
      setErrorMessage("both name and price are mandatory")
      return 
    }

    // look how to receive the properties of the obj
    const newProduct = {
      id: crypto.randomUUID(),
      name: nameValue,
      price: priceValue,
      isPurchased: false
    }
    console.log(newProduct)

    // props.addProduct(newProduct)
    // props.setAllProducts([...props.allProducts, newProduct])
    props.setAllProducts( (state) => {
      // return what would be the new value of the state
      return [...state, newProduct]
    } )

    // look for the state in which to add the elements
    // add something new to that state

  }

  return (
    <div className="add-form container">
      
      <h2>Add Form</h2>

      <form onSubmit={handleAddProduct}>

        <div>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" onChange={handleNameChange} value={nameValue}/>
        </div>

        <div>
          <label htmlFor="price">Price: </label>
          <input type="number" name="price" onChange={handlePriceChange} value={priceValue}/>
        </div>

        <button>Add</button>

        {errorMessage && <p>{errorMessage}</p>}

      </form>

    </div>
  )
}

export default AddForm