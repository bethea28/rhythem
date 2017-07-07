import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {change, submit, api} from './actions'
import Ajax from './ajax'
import store from './store'


const App = (props) => {
  // const submit = (props) => {
  //   event.preventDefault()
  //   console.log(props.name)
  //   // let person =  props.list.push(props.name)
  //   // return person
  // }
  // {props.list ? props.list.map((ele,key)=>{
  //   return <li key = {key}> {ele}</li>
  // }): <p>..loding</p>}
  console.log(props)
  return (
    <div>
      <form onSubmit = {props.submit}>
        <input type = 'input' onChange = {(event) => {props.change(event.target.value)}} placeholder = 'name' ></input>
        <input type = 'submit'></input>
      </form>
      {store.getState().name}
      {props.list && props.list.map((ele,key)=>{
        return <li>{ele}</li>
      })}
      <Ajax serve = {props.api} />
      {props.children}
    </div>
  )
}

const mapStateToProps = state => {
    return {
      name: state.name,
      list: state.list,
      test: state.test
    }
}

const dispatchStateToProps = dispatch => (
  bindActionCreators({
    change, submit, api
  }, dispatch)
)

export default connect (
  mapStateToProps,
  dispatchStateToProps
)(App)

// export default App
