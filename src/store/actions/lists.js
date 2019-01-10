
import * as actionType from './actions'

export const addList = (listItem) => {
  return {
    type: actionType.ADD_ITEM,
    listItem: listItem
  }
}

export const removeList = (refNum) => {
  return(dispatch, getState)=>{

    const sample = getState().listItems.totals
    console.log(sample)
    dispatch(getTotals(refNum))
  }
}

export const getTotals = (refNum) => {
  return {
    type: actionType.REMOVE_ITEM,
    refNum: refNum
  }
}