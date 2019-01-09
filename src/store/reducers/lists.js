import {updateObject, updateTotals} from '../../UI/Utils'
import * as actionType from '../actions/actions'

const initialState = {
    lists: [],
    totals: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.ADD_ITEM:
      const list = state.lists
        list.push(action.listItem)
      
      let total = updateTotals(list)
      return updateObject(state, {
        lists: list,
        totals: total
      })

    case actionType.REMOVE_ITEM:
      const items = state.lists.filter((list, i)=>{
        return i !== action.refNum
      })
      
      let newTotal = updateTotals(items)
      
      return updateObject(state, { 
        ...state, 
        lists: items, 
        totals: newTotal
      })

    default:
      return state
  }
}

export default reducer