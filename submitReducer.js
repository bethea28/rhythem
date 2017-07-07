// import store from './store'

// const defaultState = {
//  list: []
// }


const submitReducer = (state = defaultState, action) => {
 console.log(state.list)
 switch(action.type){
  case 'SUBMIT':
    return Object.assign({}, state, {list: state.list.concat("store.getState().name")})
  default:
   return defaultState
 }
}

export default submitReducer