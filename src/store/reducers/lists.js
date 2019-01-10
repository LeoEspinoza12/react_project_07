import {updateObject, updateTotals} from '../../UI/Utils'
import * as actionType from '../actions/actions'

const initialState = {
    lists: [],
    totals: [],
}

const addItem = (state, action) => {
  const list = state.lists
    list.push(action.listItem)
  let total = updateTotals(list)
  return updateObject(state, {lists: list, totals: total})
}

const removeItem = (state, action) => {
  const items = state.lists.filter((list, i)=> i !== action.refNum)
  let newTotal = updateTotals(items)
  return updateObject(state, {...state, lists: items, totals: newTotal})

}



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_ITEM: return addItem(state, action)
    case actionType.REMOVE_ITEM: return removeItem(state, action)
    default:
      return state
  }
}

export default reducer