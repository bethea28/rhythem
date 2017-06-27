import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {change, submit} from './actions'


const App = (props) => {
  // const submit = (props) => {
  //   event.preventDefault()
  //   console.log(props.name)
  //   // let person =  props.list.push(props.name)
  //   // return person
  // }
  console.log(props.list)
  return (
    <div>
      <form onSubmit = {props.submit}>
        <input type = 'input' onChange = {(event) => {props.change(event.target.value)}} placeholder = 'name' ></input>
        <input type = 'submit'></input>
      </form>
      {props.name}
      {props.list ? props.list.map((ele,key)=>{
        return <li key = {key}> {ele}</li>
      }): <p>..loding</p>}

      {props.children}
    </div>
  )
}

const mapStateToProps = state => {
    return {
      name: state.name,
      list: state.list
    }
}

const dispatchStateToProps = dispatch => (
  bindActionCreators({
    change, submit
  }, dispatch)
)

export default connect (
  mapStateToProps,
  dispatchStateToProps
)(App)
