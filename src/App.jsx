import { useReducer } from 'react';
import ProductItem from './components/ProductItem';
import ShoppingCartProduct from './components/ShoppingCartProduct';
import { reducerCart, productsInitialState } from './reducers/shoppingCart_reducer';
import TYPES from './reducers/actionTypes';
import './App.css'

function App() {

  const [state, dispatch] = useReducer(reducerCart, productsInitialState);

  const addToCart = (id) => {
    dispatch({ 
      type: TYPES.ADD_TO_CART,
      payload: id
    })
  }

  const deleteFromCart = (id) => {
    dispatch({ 
      type: TYPES.DELETE_PRODUCT_FROM_CART,
      payload: id
    })
  }

  const clearCart = () => {
    dispatch({ 
      type: TYPES.DELETE_ALL_FROM_CART
    })
  }

  const claculateTotalPriceOfCart = () => {
    dispatch({ 
      type: TYPES.CALCULATE_TOTAL_PRICE_OF_THE_CART
    })
  }

  return (
    <>
      <h1 className='title'>Learn useReducer</h1>
      <hr />
      <h2 className='subtitle_products'>Products in stock</h2>
      <div className='container_grid_products'>
        {
          state.products.map((product) => {
            return <ProductItem key={product.id} data={product} addToCart={addToCart}/>
          })
        }
      </div>
      <hr />
      <h2 className='subtitle_shopping_cart'>Shopping cart</h2>
      <div>
        <button className='btn btn_totalPrice' onClick={() => claculateTotalPriceOfCart()}>Total price</button>
        <button className='btn btn_clearCart' onClick={() => clearCart()}>Clear cart</button>
      </div>
        {state.cart.length === 0 && <p className='text_NoProductsInCart'>There are no products in the cart</p>}
      <div className='container_grid_shopping_cart'>
        {
          state.cart.map((productCart) => {
            return <ShoppingCartProduct key={productCart.id + (Math.random() * 50)} data={productCart} deleteFromCart={deleteFromCart} />
          }) 
        }
      </div>
    </>
  )
}

export default App
