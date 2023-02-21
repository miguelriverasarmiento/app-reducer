import './App.css'

function App() {

  return (
    <>
      <h1 className='title'>Learn useReducer</h1>
      <hr />
      <h2 className='subtitle_products'>Products in stock</h2>
      <div className='container_grid_products'></div>
      <hr />
      <h2 className='subtitle_shopping_cart'>Shopping cart</h2>
      <div>
        <button className='btn btn_totalPrice'>Total price</button>
        <button className='btn btn_clearCart'>Clear cart</button>
      </div>

      <div className='container_grid_shopping_cart'></div>
    </>
  )
}

export default App
