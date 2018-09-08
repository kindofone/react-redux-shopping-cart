import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE
} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {}
}

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // TODO: implement addedIds reducer's ADD_TO_CART case.
      // === Instructions ===
      // The ADD_TO_CART action payload holds the productId that is being added.
      // This function should return the current state as is, if productId already exist in the state.
      // If productId does exist in the current state,
      // it should return a new state array [] with the added productId.
      // === Example ===
      // If prevState = [] and productId = 1 then newState = [1]
      // If prevState = [1] and productId = 1 then newState = [1]
      // If prevState = [1] and productId = 2 then newState = [1, 2]
    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // TODO: implement quantityById reducer's ADD_TO_CART case.
      // === Instructions ===
      // The ADD_TO_CART action should return a state object {},
      // with a new key for the product that was just added to the cart.
      // (you can find the 'productId' that was added in the payload of this action,
      // as a key in the action param of this function.)
      // When you add it to the state, the key name should be the 'productId' value itself,
      // and the value is the quantity of that product in the cart.
      // If the product already exists in the cart (in the state),
      // increment its count by 1. If it didn't exist in the current, set it to 1.
      // === Example ===
      // if prevState = {} and productId = 1 then newState = {1: 1}
      // if prevState = {1: 1} and productId = 1 then newState = {1: 2}
      // if prevState = {1: 2} and productId = 5 then newState = {1: 2, 5: 1}
      // if prevState = {1: 2, 5: 1} and productId = 1 then newState = {1: 3, 5: 1}
      // And so on...
    default:
      return state
  }
}

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0

export const getAddedIds = state => state.addedIds

const cart = (state = initialState, action) => {
  switch (action.type) {
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action)
      }
  }
}

export default cart
