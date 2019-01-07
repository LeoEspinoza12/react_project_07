const redux = require('redux')

const createStore = redux.createStore

const initialState = {
  name: 'aiman',
  lastname: 'adlawan'
}

const rootRucer = (state = initialState, action)=>{

  if(action.type === 'CHANGE_NAME'){
    return {
      ...state,
      name: action.value
    }
  }

  if (action.type === 'CHANGE_LASTNAME') {
    return {
      ...state,
      lastname: action.value
    }
  }

  return state
}

const store = createStore(rootRucer)
console.log(store.getState())

store.subscribe(() => {
  console.log('subcribe', store.getState())
})

store.dispatch({type: 'CHANGE_NAME', value: 'Tracy'})
console.log(store.getState())

store.dispatch({type: 'CHANGE_LASTNAME', value: 'Lao'})
console.log(store.getState())
