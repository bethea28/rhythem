

const defaultState = {
  name: ''
}

const reducer = (state = defaultState, action) =>{
  switch(action.type){
    case 'CHANGE':
      return Object.assign({}, state, {name: action.data})
  }
}

export default reducer
