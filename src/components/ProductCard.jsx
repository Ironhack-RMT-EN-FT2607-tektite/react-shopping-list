function ProductCard({ name, price, isPurchased, setAllProducts, index }) {
  // console.log(props)

  const handlePurchaseProduct = () => {

    // setAllProducts
    // how to acces the specific element to update
    console.log(index)
    setAllProducts( (state) => {
      let deepClone = structuredClone(state) // !deep cloning since we are trying to modify nested values in the data structure and we don't want to directly mutate the state
      deepClone[index].isPurchased = true
      deepClone[index].isPurchased = !deepClone[index].isPurchased
      return deepClone
    } )

  }

  return (
    <div className="product-card">
      <h3>{name}</h3>
      <p>{price}€</p>
      <p>{isPurchased === true ? "✅" : "🟡"}</p>
      <button onClick={handlePurchaseProduct}>Buy</button>
    </div>
  );
}

export default ProductCard;
