export const change = (data) => {
  return {
    type: 'CHANGE', data: data
  }
}
export const submit = (data) => {
  console.log('submit')
  return {
    type: 'SUBMIT', data: data
  }
}

// export const submit = ({name, list}) => event => {
//   event.preventDefault()
//
//
// }