import axios from 'axios'

export const change = (data) => {
  return {
    type: 'CHANGE', data: data
  }
}
export const submit = (data) => {
  console.log('submit')
  return {
    type: 'SUBMIT',
  }
}
export const apihandle = (data) => {
  console.log(data)

  return {
    type: "API", data: data
  }
}

export const api = ({test}) => dispatch => {
  // console.log('served')
  axios.get('http://swapi.co/api/people/1/')
  .then(({ data }) => {
    console.log(data)
  dispatch(apihandle(data));
  })

}

// export const submit = ({name, list}) => event => {
//   event.preventDefault()
//
//
// }
