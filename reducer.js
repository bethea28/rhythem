

const defaultState = {
  name: '',
  list: [],
  test: ''
}

const reducer = (state = defaultState, action) =>{
  console.log(`this is ${state.list[0]}`)
  switch(action.type){
    case 'CHANGE':
      return Object.assign({}, state, {name: action.data})
    case 'SUBMIT':
      // return Object.assign({}, state, {list: [...state.list, state.name]})
      return Object.assign({}, state, {list: state.list.concat(state.name)})
    case "API":
      return Object.assign({},state, {test: action.data})
    default:
      return defaultState
  }
}

export default reducer
