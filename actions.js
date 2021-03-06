import axios from 'axios'

export const change = (data) => {
  console.log('change',data)
  return {
    type: 'CHANGE', data: data
  }
}
export const submit = (e,data) => {
  e.preventDefault()
  console.log('submit', e.preventDefault, data)
  return {
    type: 'SUBMIT',
    data: data
  }
}

export const hideAjaxButton = () => {
    return{
      type: 'AJAXHIDE', data: true
    }
}

export const apihandle = (data) => {
  // console.log(data)

  return {
    type: "API", data: data
  }
}

export const api = ({test}) => dispatch => {
  // console.log('served')
  axios.get('http://swapi.co/api/people/1/')
  .then(({ data }) => {
    // console.log(data)
  dispatch(apihandle(data));
  })

}

// export const submit = ({name, list}) => event => {
//   event.preventDefault()
//
//
// }
