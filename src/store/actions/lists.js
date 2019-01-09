
import * as actionType from './actions'

export const addList = (listItem) => {
  return {
    type: actionType.ADD_ITEM,
    listItem: listItem
  }
}

export const removeList = (refNum) => {
  return {
    type: actionType.REMOVE_ITEM,
    refNum: refNum
  }
}

export const getTotals = () => {
  return {
    type: actionType.GET_TOTALS
  }
}