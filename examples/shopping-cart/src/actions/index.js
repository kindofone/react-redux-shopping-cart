import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  // TODO: implement the addToCart action here.
  // === Instructions ===
  // The addToCart action is responsible for dispatching to the store.
  // Redux's dispatch function gets one parameter, the param should be
  // an object containing the action 'type' as key and any other payload keys.
  // In this case, you should dispatch the ADD_TO_CART action type.
  // To do that, you need to dispatch the 'addToCartUnsafe()' function above, but
  // make sure you send the productId that is being added to addToCartUnsafe().
  // Important: every product has an inventory quantity,
  // beyond that quantity it becomes "Sold Out".
  // Make sure to check that the product inventory is greater than zero ("> 0")
  // before dispatching the action to the store.
  // Hint: you can call "getState()" to get the current store state.
  // To find the inventory of each product, open the DevTools' console,
  // and look inside the "next state" object, under "products".
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}
